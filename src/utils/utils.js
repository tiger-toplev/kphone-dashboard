export const handleErrorResponseObject = (error) => {
  if (
    error.response &&
    error.response.data &&
    error.response.data.message == "Redirect"
  ) {
    localStorage.removeItem("access_token");
    window.location = "/pages/login";
  } else if (error.response && error.response.data.error) {
    throw new Error(error.response.data.error);
  } else if (error.response) {
    throw new Error(error.response.statusText);
  } else {
    if (error && error.message) throw new Error(error.message);
  }
};
export const makeid = (length) => {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
