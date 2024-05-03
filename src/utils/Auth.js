export const setAdminLocalStorage = (accessToken) => {
  window.localStorage.setItem("access_token", accessToken);
};
export const setOtherLocalStorage = (otherToken) => {
  window.localStorage.setItem("other_token", otherToken);
};
export const deleteItemsLocalStorage = () => {
  window.localStorage.removeItem("access_token");
};
