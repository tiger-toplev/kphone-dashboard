import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import { faHome } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TitleComponent3 = (props) => {
  const { sublink,parentlink } = props;
  return (
    <Fragment>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/" onClick={(e) => e.preventDefault()}>
            {/* <FontAwesomeIcon icon={faHome} /> */}
          </a>
        </BreadcrumbItem>
        {/* <BreadcrumbItem>
          <Link to={`/admin/${parentlink}`}>{parentlink}</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <Link to={`/admin/${sublink}`}>{sublink}</Link>
        </BreadcrumbItem> */}
      </Breadcrumb>
    </Fragment>
  );
};
export default TitleComponent3;
