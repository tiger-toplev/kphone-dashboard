import CommandService from "../services/CommandService";
import moment from "moment";

export const setActionState = (actionState) => ({
  type: "COMMAND/SETACTIONSTATE",
  actionState,
});

export const setTableData = (tableData) => ({
  type: "COMMAND/SETTABLEDATA",
  tableData,
});

export const setDevTableData = (devTableData) => ({
  type: "COMMAND/SETDEVTABLEDATA",
  devTableData,
});

export const addRowData = (addRowData) => ({
  type: "COMMAND/ADDROW",
  addRowData,
});

export const delRowData = (deletedRowId) => ({
  type: "COMMAND/DELROW",
  deletedRowId,
});

export const getCommandAction = () => {
  return (dispatch) => {
    CommandService.getCommands().then((res) => {
      if (res) {
        dispatch(setTableData(res));
      }
    });
  };
};

export const addCommandAction = (payload) => {
  return (dispatch) => {
    CommandService.addCommands(payload).then((res) => {
      if (res) {
        dispatch(addRowData(res));
        dispatch(setActionState(true));
      } else dispatch(setActionState(false));
    });
  };
};

export const delCommandAction = (rowId) => {
  return (dispatch) => {
    CommandService.delCommands(rowId).then((res) => {
      if (res) {
        dispatch(delRowData(rowId));
        dispatch(setActionState(true));
      } else dispatch(setActionState(false));
    });
  };
};

export const getCommandByDevIdAction = (devId) => {
  return (dispatch) => {
    if (devId !== ":devid") {
      CommandService.getCommandsByDeviceId(devId).then((res) => {
        dispatch(setTableData(res));
      });
      CommandService.getDevice(devId).then((res) => {
        let currentRes = res;
        let now = new Date();
        now.setTime(res.lastCheckIn);
        currentRes.lastCheckIn = moment(now).format("YYYY-MM-DD");
        dispatch(setDevTableData(currentRes));
      });
    }
  };
};
