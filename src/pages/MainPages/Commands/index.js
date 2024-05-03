import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import CommandTable from "./CommandTable";

const Commands = ({ match }) => (
  <Fragment>
    <Route path={`${match.url}`} component={CommandTable} />
  </Fragment>
);

export default Commands;
