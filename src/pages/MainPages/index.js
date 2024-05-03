import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Command from "./Commands";
import App from "./Apps";
import Meeting from "./Meetings";
import Device from "./Device";

// Layout

import AppHeader from "../../Layout/AppHeader";
import AppSidebar from "../../Layout/AppSidebar";
import AppFooter from "../../Layout/AppFooter";

// Theme Options
import ThemeOptions from "../../Layout/ThemeOptions";

const Dashboards = ({ match }) => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          <Route path={`${match.url}/command`} component={Command}/>
          <Route path={`${match.url}/app`} component={App} />
          <Route path={`${match.url}/meeting`} component={Meeting} />
          <Route path={`${match.url}/device`} component={Device} />
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Dashboards;
