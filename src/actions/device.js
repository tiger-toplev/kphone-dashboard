import DeviceService from "../services/DeviceService";
import moment from "moment";

export const setTableData = (tableData) => ({
  type: "DEVICES/GETDEVLIST",
  tableData,
});

export const setTotalPage = (totalPages) => ({
  type: "DEVICES/SETPAGES",
  totalPages,
});

export const getDevicesList = (pageNum, pageSize ) => {
  return (dispatch) => {
    DeviceService.getDevice(pageNum, pageSize ).then((res) => {
      let content = res.content;
      if (res) {
        content = content.map((item) => {
          item.lastCheckIn = moment(new Date(item.lastCheckIn)).format(
            "MMMM Do hh:mm:ss a"
          );
          return item;
        });
        dispatch(setTableData({content, totalPages: res.totalPages}));
      }
    });
  };
};

export const getDeviceById = (devId) => {
  return (dispatch) => {
    DeviceService.getDeviceById(devId).then((res) => {
      if (res) {
        let currentRes = res;
        let now = new Date();
        now.setTime(res.lastCheckIn);
        currentRes.lastCheckIn = moment(now).format("MMMM Do hh:mm:ss a");
        dispatch(setTableData([currentRes]));
      }
    });
  };
};
