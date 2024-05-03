import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import cx from "classnames";

import Nav from "../AppNav/VerticalNavWrapper";

import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import PerfectScrollbar from "react-perfect-scrollbar";
import HeaderLogo from "../AppLogo";

import { setEnableMobileMenu } from "../../actions/themeOptions";

class AppSidebar extends Component {
  state = {};

  toggleMobileSidebar = () => {
    let { enableMobileMenu, setEnableMobileMenu } = this.props;
    setEnableMobileMenu(!enableMobileMenu);
  };

  render() {
    let {
      backgroundColor,
      enableBackgroundImage,
      enableSidebarShadow,
      backgroundImage,
      backgroundImageOpacity,
    } = this.props;

    return (
      <Fragment>
        <div className="sidebar-mobile-overlay" onClick={this.toggleMobileSidebar}/>
        <CSSTransitionGroup component="div"
          className={cx("app-sidebar", backgroundColor, {
            "sidebar-shadow": enableSidebarShadow,
          })}
          transitionName="SidebarAnimation" transitionAppear={true} transitionAppearTimeout={1500}
          transitionEnter={false} transitionLeave={false}>
          <HeaderLogo />
          <PerfectScrollbar>
            <div className="app-sidebar__inner">
              <Nav />
            </div>
          </PerfectScrollbar>
          <div className={cx("app-sidebar-bg", backgroundImageOpacity)}
            style={{
              backgroundImage: enableBackgroundImage
                ? "url(" + backgroundImage + ")"
                : null,
            }}>
          </div>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  enableBackgroundImage: state.themeOptions.enableBackgroundImage,
  enableSidebarShadow: state.themeOptions.enableSidebarShadow,
  enableMobileMenu: state.themeOptions.enableMobileMenu,
  backgroundColor: state.themeOptions.backgroundColor,
  backgroundImage: state.themeOptions.backgroundImage,
  backgroundImageOpacity: state.themeOptions.backgroundImageOpacity,
});

const mapDispatchToProps = (dispatch) => ({
  setEnableMobileMenu: (enable) => dispatch(setEnableMobileMenu(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppSidebar);
