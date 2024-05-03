import React, { Component, Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import PageTitle from "../../../Layout/AppMain/PageTitle";

// Examples
import AnalyticsDashboard1 from "./Examples/Variation1";

const AnalyticsDashboard = () => {
  return (
    <Fragment>
      <CSSTransitionGroup
        component="div"
        transitionName="TabsAnimation"
        transitionAppear={true}
        transitionAppearTimeout={0}
        transitionEnter={false}
        transitionLeave={false}
      >
        <PageTitle
          heading="Check API"
          subheading="Check Api DashBoards"
          parentlink="DashBoard"
          sublink="CheckAPI"
          icon="pe-7s-car icon-gradient bg-mean-fruit"
        />
        <AnalyticsDashboard1 />
      </CSSTransitionGroup>
    </Fragment>
  );
};

export default AnalyticsDashboard;
