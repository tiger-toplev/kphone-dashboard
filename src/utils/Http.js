import Config from "config";

export const getInsightBackendAPI = () =>
  window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" ? `${Config.API_URL}` : `${Config.API_URL}`;
