import React, { Fragment, useState, useEffect } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { AvForm, AvField } from "availity-reactstrap-validation";

import _ from "lodash";

import { Row, Col, Card, CardBody } from "reactstrap";

import PageTitle from "../../../Layout/AppMain/PageTitle";
import ReactTable from "react-table";
import CommandService from "../../../services/CommandService";

const AggregationTable = (props) => {
  const { cTableData, cHeader, dTableData, dHeader } = props;
  return (
    <Fragment>
      <div>
        <PageTitle
          heading="Devices Table"
          icon="pe-7s-medal icon-gradient bg-tempting-azure"
          parentlink="Command"
          sublink="Device"
        />
      </div>
      <Row>
        <Col md="12">
          <Card className="main-card mb-3">
            <CardBody>
              <ReactTable
                data={dTableData}
                columns={dHeader}
                defaultPageSize={5}
                filterable
                resizable
              />
            </CardBody>
          </Card>
        </Col>
        <Col md="12">
          <Card className="main-card mb-3">
            <CardBody>
              <ReactTable
                data={cTableData}
                columns={cHeader}
                defaultPageSize={5}
                filterable
                resizable
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};
export default AggregationTable;
