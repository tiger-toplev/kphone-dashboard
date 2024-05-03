import React, { useState, Fragment, useEffect } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import AggregationTable from "./Pivoting";

const DeviceInfoTable = () => {
  return (
    <Fragment>
      <CSSTransitionGroup
        ccomponent="div"
        transitionName="TabsAnimation"
        transitionAppear={true}
        transitionAppearTimeout={0}
        transitionEnter={false}
        transitionLeave={false}
      >
        <AggregationTable />
      </CSSTransitionGroup>
    </Fragment>
  );
};

export default DeviceInfoTable;
