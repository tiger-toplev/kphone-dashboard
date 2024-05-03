import React, { Component, Fragment } from "react";

import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import { faHome } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TitleComponent3 extends Component {
  render() {
    let { url, subtitle } = this.props;

    return (
      <Fragment>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()}>
              <FontAwesomeIcon icon={faHome} />
            </a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/command" onClick={(e) => e.preventDefault()}>
              {url}
            </a>
          </BreadcrumbItem>
          <BreadcrumbItem active><a href="/command/command_table" onClick={(e) => e.preventDefault()}>
              {subtitle}
            </a></BreadcrumbItem>
        </Breadcrumb>
      </Fragment>
    );
  }
}
