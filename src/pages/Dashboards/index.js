import React, { Fragment } from "react";
import { Route, useHistory } from "react-router-dom";

import AnalyticsDashboard from "./Analytics/";
import Command from "../MainPages/Commands";
import App from "../MainPages/Apps";
import Meeting from "../MainPages/Meetings";
import Device from "../MainPages/Device";
import DeviceInfo from "../MainPages/DeviceInfo";

// Layout

import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

// Theme Options
// import ThemeOptions from "../../Layout/ThemeOptions/";
const Dashboards = ({ match, ...props }) => {
  const history = useHistory();
  const access_token = localStorage.getItem("access_token");
  const redirectUrl = access_token ? "/admin/analytics" : "/pages/login";
  React.useEffect(() => {
    if (!access_token) {
      history.push(redirectUrl);
    }
  }, []);
  return (
    <Fragment>
      {/* <ThemeOptions /> */}
      <AppHeader />
      <div className="app-main">
        <AppSidebar />
        <div className="app-main__outer">
          <div className="app-main__inner">
            <Route
              path={`${match.url}/analytics`}
              component={AnalyticsDashboard}
            />
            <Route path={`${match.url}/command`} component={Command} />
            <Route path={`${match.url}/app`} component={App} />
            <Route path={`${match.url}/meeting`} component={Meeting} />
            <Route path={`${match.url}/deviceinfo`} component={DeviceInfo} />
            <Route path={`${match.url}/device/:devid`} component={Device} />
          </div>
          <AppFooter />
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboards;
