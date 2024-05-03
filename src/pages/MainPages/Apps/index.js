import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import AppTable from "./AppTable";

const Apps = ({ match }) => (
  <Fragment>
    <Route path={`${match.url}`} component={AppTable} />
  </Fragment>
);

export default Apps;
