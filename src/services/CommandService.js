import axios from "axios";
import { getInsightBackendAPI } from "../utils/Http";
import { handleErrorResponseObject } from "../utils/utils";

class CommandService {
  getCommands = () => {
    const api = getInsightBackendAPI();
    return axios
      .get(
        `${api}/commands/get`,
        {},
        { headers: { "Access-Control-Allow-Origin": "*" } }
      )
      .then((res) => res.data)
      .catch((error) => handleErrorResponseObject(error));
  };
  addCommands = (payload) => {
    const api = getInsightBackendAPI();
    const token = localStorage.getItem("access_token");
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
      },
    };
    return axios
      .post(`${api}/admin/commands/add`, payload, config)
      .then((res) => res.data)
      .catch((error) => handleErrorResponseObject(error));
  };
  delCommands = (rowid) => {
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
      .delete(`${api}/admin/commands/${rowid}/delete`, config)
      .then((res) => res)
      .catch((error) => handleErrorResponseObject(error));
  };
  getCommandsByDeviceId = (deviceId) => {
    const api = getInsightBackendAPI();
    return axios
      .get(`${api}/commands/${deviceId}/get`)
      .then((res) => res.data)
      .catch((error) => handleErrorResponseObject(error));
  }
  getDevice = (deviceId) => {
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
  }
  UpdateSchool = (deviceId) => {
    const api = getInsightBackendAPI();
    const token = localStorage.getItem("access_token");
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "https://localhost:3000",
        "Content-Type": "text/plain;charset=ISO-8859-1",
      },
    };
    return axios
      .get(`${api}/schools/update/${deviceId}`,config)
      .then((res) => res.data)
      .catch((error) => handleErrorResponseObject(error));
  }
  active = () => {
    const api = getInsightBackendAPI();
    const token = localStorage.getItem("access_token");
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "https://localhost:3000",
        "Content-Type": "text/plain;charset=ISO-8859-1",
      },
    };
    return axios
      .get(`${api}/admin/devices/active`,config)
      .then((res) => res.data)
      .catch((error) => handleErrorResponseObject(error));
  }
}

export default new CommandService();
