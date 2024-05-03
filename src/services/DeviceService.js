import axios from "axios";
import { getInsightBackendAPI } from "../utils/Http";
import { handleErrorResponseObject } from "../utils/utils";

class DeviceService {
  getDevice = (pageNum,pageSize) => {
    const api = getInsightBackendAPI();
    const token = localStorage.getItem("access_token");
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "https://localhost:3000",
        "Content-Type": "text/plain;charset=ISO-8859-1",
      },
    };
    if(token){
      return axios
      .get(`${api}/admin/devices/list?page-number=${pageNum}&page-size=${pageSize}`, config)
      .then((res) => res.data)
      .catch((error) => handleErrorResponseObject(error));
    } else return null;
  };
  getDeviceById = (deviceId) => {
    const api = getInsightBackendAPI();
    const token = localStorage.getItem("access_token");
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/plain;charset=ISO-8859-1",
      },
    };
    return axios
      .get(`${api}/admin/devices/${deviceId}/`,config)
      .then((res) => res.data)
      .catch((error) => handleErrorResponseObject(error));
  };
};

export default new DeviceService();
