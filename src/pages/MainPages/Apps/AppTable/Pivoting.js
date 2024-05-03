import React, { Fragment, useState, useEffect } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { AvForm, AvField } from "availity-reactstrap-validation";

import _ from "lodash";

import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Rodal from "rodal";
import PageTitle from "../../../../Layout/AppMain/PageTitle";
import ReactTable from "react-table";

const AggregationTable = (props) => {
  const { tableData, header, handleSave } = props;
  const [columns] = useState(header || []);
  const [show, setShow] = useState(false);
  const [packageName, setPackageName] = useState("");
  const [versionCode, setVersionCode] = useState("");
  const [url, setUrl] = useState("");
  const addApp = () => {
    const payload = {
      packageName,
      versionCode,
      url,
    };
    handleSave(payload);
    setShow(false);
  };
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
        <div>
          <PageTitle
            heading="App Table"
            icon="pe-7s-medal icon-gradient bg-tempting-azure"
            parentlink="App"
            sublink="App"
          />
        </div>
        <Row>
          <Col md="12">
            <Button
              className="mb-2 mr-2 btn-icon"
              color="info"
              onClick={(e) => setShow(true)}
            >
              <i className="pe-7s-science btn-icon-wrapper"> </i>
              Add App
            </Button>
            <Card className="main-card mb-3">
              <CardBody>
                <ReactTable
                  data={tableData}
                  columns={columns}
                  defaultPageSize={10}
                  filterable
                  resizable
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <AvForm>
          <Rodal
            visible={show}
            onClose={(e) => setShow(false)}
            animation="zoom"
            showMask={false}
            width={800}
          >
            <ModalHeader>Add Apps</ModalHeader>
            <ModalBody>
              <Row>
                <Col md="12">
                  <AvField
                    name="packageName"
                    label="PackageName"
                    value={packageName}
                    onChange={(e) => setPackageName(e.target.value)}
                    required
                  />
                  <AvField
                    name="versionCode"
                    label="VersionCode"
                    value={versionCode}
                    onChange={(e) => setVersionCode(e.target.value)}
                    required
                  />
                  <AvField
                    name="url"
                    label="Url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                  />
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={(e) => setShow(false)}>
                Cancel
              </Button>
              <Button color="success" onClick={(e) => addApp()}>
                Save
              </Button>
            </ModalFooter>
          </Rodal>
        </AvForm>
      </CSSTransitionGroup>
    </Fragment>
  );
};
export default AggregationTable;
