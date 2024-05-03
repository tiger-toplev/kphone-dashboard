import axios from "axios";
import Config from "../config";
import { handleErrorResponseObject } from "../utils/utils";

class AuthService {
  getToken = () => {
    const sendData = {
      grant_type: `client_credentials`,
      client_id: `uOYOva4JrNQjZlQjaod9VJ6JPY2fNzg9`,
      client_secret: `fD1IqscUwK8rKH3Fj7XSlMtvgwE0uAUFkRyaqlt9zAPau_cUKWPWhsueOInk4rT6`,
      audience: `https://backend.kzoom.app`,
    };
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    return axios
      .post(`https://kphone.us.auth0.com/oauth/token/`, sendData, config)
      .then((res) => res.data)
      .catch((error) => handleErrorResponseObject(error));
  };
}

export default new AuthService();
