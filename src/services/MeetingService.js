import axios from "axios";
import { getInsightBackendAPI } from "../utils/Http";
import { handleErrorResponseObject } from "../utils/utils";

class MeetingService {
  getMeetings = () => {
    const api = getInsightBackendAPI();
    return axios
      .get(
        `${api}/admin/meetings/get`,
        {},
        { headers: { "Access-Control-Allow-Origin": "http://localhost:3000" } }
      )
      .then((res) => res.data)
      .catch((error) => handleErrorResponseObject(error));
  };
  addMeetings = (payload) => {
    const api = getInsightBackendAPI();
    const token = localStorage.getItem("access_token");
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
    };
    return axios
      .post(`${api}/admin/meetings/add`, payload, config)
      .then((res) => res.data)
      .catch((error) => handleErrorResponseObject(error));
  };
  delMeetings = (packageName) => {
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
      .delete(`${api}/admin/meetings/${packageName}/delete`, config)
      .then((res) => res.data)
      .catch((error) => handleErrorResponseObject(error));
  };
}

export default new MeetingService();
