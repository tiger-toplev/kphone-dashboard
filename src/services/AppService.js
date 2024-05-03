import axios from "axios";
import { getInsightBackendAPI } from "../utils/Http";
import { handleErrorResponseObject } from "../utils/utils";

class AppService {
  getApps = () => {
    const api = getInsightBackendAPI();
    return axios
      .get(
        `${api}/apps/get`,
        {},
        { headers: { "Access-Control-Allow-Origin": "http://localhost:3000" } }
      )
      .then((res) => res.data)
      .catch((error) => handleErrorResponseObject(error));
  };
  addApps = (payload) => {
    const api = getInsightBackendAPI();
    const token = localStorage.getItem("access_token");
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
      },
    };
    return axios
      .post(`${api}/admin/apps/add`, payload, config)
      .then((res) => res.data)
      .catch((error) => handleErrorResponseObject(error));
  };
  delApps = (packageName) => {
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
      .delete(`${api}/admin/apps/${packageName}/delete`, config)
      .then((res) => res)
      .catch((error) => handleErrorResponseObject(error));
  };
}

export default new AppService();
