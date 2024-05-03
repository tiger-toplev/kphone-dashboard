import axios from "axios";
import { getInsightBackendAPI } from "../utils/Http";
import { handleErrorResponseObject,makeid } from "../utils/utils";

class OtherService {
  healthCheck = () => {
    const api = getInsightBackendAPI();
    return axios
      .get(
        `${api}/health`,
        {},
        { headers: { "Access-Control-Allow-Origin": "*" } }
      )
      .then((res) => res.data)
      .catch((error) => handleErrorResponseObject(error));
  };
  updateSchool = (payload) => {
    const api = getInsightBackendAPI();
    const token = localStorage.getItem("access_token");
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
    };
    return axios
      .put(`${api}/admin/schools/update/all`, payload, config)
      .then((res) => res.data)
      .catch((error) => handleErrorResponseObject(error));
  };
  getSignature = () => {
    const api = getInsightBackendAPI();
    const randomId = makeid(5);
    return axios
      .get(`${api}/zoom/signature/generate/${randomId}`)
      .then((res) => res.data)
      .catch((error) => handleErrorResponseObject(error));
  };
}

export default new OtherService();
