import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import MeetingTable from "./MeetingTable";

const Meeting = ({ match }) => (
  <Fragment>
    <Route path={`${match.url}`} component={MeetingTable} />
  </Fragment>
);

export default Meeting;
