import { combineReducers } from "redux";
import themeOptions from "./themesOption";
import command from "./command";
import app from "./app";
import device from "./device";

const appReducer = combineReducers({
  themeOptions,
  command,
  app,
  device,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
