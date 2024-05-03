import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import DeviceInfoTable from "./DeviceInfoTable";

const DeviceInfo = ({ match }) => {
  return (
    <Fragment>
      <Route path={`${match.url}`} component={DeviceInfoTable} />
    </Fragment>
  );
};

export default DeviceInfo;
