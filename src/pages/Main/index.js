import React, { Fragment } from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";

import ResizeDetector from "react-resize-detector";
import { Auth0Provider } from "@auth0/auth0-react";
import Config from "../../config";
import history from "../../utils/History";
import AppMain from "../../Layout/AppMain";

const Main = (props) => {
  let {
    colorScheme,
    enableFixedHeader,
    enableFixedSidebar,
    enableFixedFooter,
    enableClosedSidebar,
    closedSmallerSidebar,
    enableMobileMenu,
    enablePageTabsAlt,
  } = props;

  const onRedirectCallback = (appState) => {
    console.log(appState);
    return;
    history.push(
      appState && appState.returnTo
        ? appState.returnTo
        : window.location.pathname
    );
  };
  return (
    <ResizeDetector
      handleWidth
      render={({ width }) => (
        <Fragment>
          <Auth0Provider
            domain={Config.REACT_DOMAIN}
            clientId={Config.REACT_CLIENT_ID}
            redirectUri={window.location.origin}
            audience={`https://backend.kzoom.app`}
            scope="admin openid profile email"
          >
            <div
              className={cx(
                "app-container app-theme-" + colorScheme,
                { "fixed-header": enableFixedHeader },
                { "fixed-sidebar": enableFixedSidebar || width < 1250 },
                { "fixed-footer": enableFixedFooter },
                { "closed-sidebar": enableClosedSidebar || width < 1250 },
                {
                  "closed-sidebar-mobile": closedSmallerSidebar || width < 1250,
                },
                { "sidebar-mobile-open": enableMobileMenu },
                { "body-tabs-shadow-btn": enablePageTabsAlt }
              )}
            >
              <AppMain/>
            </div>
          </Auth0Provider>
        </Fragment>
      )}
    />
  );
};

const mapStateToProp = (state) => ({
  colorScheme: state.themeOptions.colorScheme,
  enableFixedHeader: state.themeOptions.enableFixedHeader,
  enableMobileMenu: state.themeOptions.enableMobileMenu,
  enableFixedFooter: state.themeOptions.enableFixedFooter,
  enableFixedSidebar: state.themeOptions.enableFixedSidebar,
  enableClosedSidebar: state.themeOptions.enableClosedSidebar,
  enablePageTabsAlt: state.themeOptions.enablePageTabsAlt,
});

export default withRouter(connect(mapStateToProp)(Main));
