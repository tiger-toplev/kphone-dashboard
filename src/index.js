import "./polyfills";
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { HashRouter, Router } from "react-router-dom";
import "./assets/base.scss";
import Main from "./pages/Main";
import configureStore from "./config/configureStore";
import { Provider } from "react-redux";

const store = configureStore();
const rootElement = document.getElementById("root");

const renderApp = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
      {/* <Router history={history}> */}
        <Component />
      </HashRouter>
      {/* </Router> */}
    </Provider>,
    rootElement
  );
};

renderApp(Main);

if (module.hot) {
  module.hot.accept("./pages/Main", () => {
    const NextApp = require("./pages/Main").default;
    renderApp(NextApp);
  });
}
serviceWorker.unregister();
