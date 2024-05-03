import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import cx from "classnames";

import TitleComponent1 from "./PageTitleExamples/Variation1";
import TitleComponent2 from "./PageTitleExamples/Variation2";
import TitleComponent3 from "./PageTitleExamples/Variation3";

const PageTitle = (props) => {
  let {
    enablePageTitleIcon,
    enablePageTitleSubheading,
    heading,
    icon,
    subheading,
    parentlink,
    sublink,
  } = props;
  // var arr = [<TitleComponent1 />, <TitleComponent2 />, <TitleComponent3 />];
  return (
    <div className="app-page-title">
      <div className="page-title-wrapper">
        <div className="page-title-heading">
          <div
            className={cx("page-title-icon", {
              "d-none": !enablePageTitleIcon,
            })}
          >
            <i className={icon} />
          </div>
          <div>
            {heading}
            <div
              className={cx("page-title-subheading", {
                "d-none": !enablePageTitleSubheading,
              })}
            >
              {subheading}
            </div>
          </div>
        </div>        
        <div className="page-title-actions"><TitleComponent3 parentlink={parentlink} sublink={sublink}/></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  enablePageTitleIcon: state.themeOptions.enablePageTitleIcon,
  enablePageTitleSubheading: state.themeOptions.enablePageTitleSubheading,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PageTitle);
