import React, { Fragment, useState, useEffect } from "react";
import { Combobox } from "react-widgets";
import { AvForm, AvField } from "availity-reactstrap-validation";

import _ from "lodash";

import {
  Row,
  Col,
  Card,
  CardBody,
  Input,
  Button,
  Label,
  FormGroup,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Rodal from "rodal";
import { useHistory } from "react-router-dom";
import PageTitle from "../../../../Layout/AppMain/PageTitle";
import ReactTable from "react-table";

const AggregationTable = (props) => {
  const { tableData, header, handleSave } = props;
  const [columns] = useState(header || []);
  const [show, setShow] = useState(false);
  const [type, setType] = useState("reboot");
  const [deviceId, setDeviceId] = useState("");
  const [school, setSchool] = useState("");
  const [paramOne, setParamOne] = useState("");
  const [paramTwo, setParamTwo] = useState("");
  const [paramThree, setParamThree] = useState("");
  const [paramFour, setParamFour] = useState("");
  const [paramFive, setParamFive] = useState("");
  const [devId, setDevId] = useState("");
  const history = useHistory();
  const value = [
    "reboot",
    "shutdown",
    "install",
    "uninstall",
    "disable",
    "enable",
  ];
  const addCommand = () => {
    const payload = {
      deviceId,
      school,
      type,
      paramOne,
      paramTwo,
      paramThree,
      paramFour,
      paramFive,
    };
    handleSave(payload);
    setShow(false);
  };

  const handleGetCommand = () => {
    if (!devId) {
      alert("No DeviceId!");
      return;
    }
    history.push(`/admin/device/${devId}`);
    // history.push(`/admin/deviceinfo/${devId}`);
  };
  const changeType = (type) => {
    setType(type.value);
  };
  const getUiFormByType = () => {
    if (type == "install") {
      return (
        <>
          <Col md="12">
            <AvField
              name="paramOne"
              label="AppLink"
              value={paramOne}
              onChange={(e) => setParamOne(e.target.value)}
              required
            />
          </Col>
          <Col md="6">
            <AvField
              name="paramTwo"
              label="PackageName"
              value={paramTwo}
              onChange={(e) => setParamTwo(e.target.value)}
              required
            />
          </Col>
          <Col me="6">
            <AvField
              name="paramThree"
              label="VersionCode"
              value={paramThree}
              onChange={(e) => setParamThree(e.target.value)}
              required
            />
          </Col>
        </>
      );
    }
    if (type == "uninstall") {
      return (
        <Col md="12">
          <AvField
            name="paramOne"
            label="PackageName"
            value={paramOne}
            onChange={(e) => setParamOne(e.target.value)}
            required
          />
        </Col>
      );
    }
    if (type == "disable" || type == "enable") {
      return (
        <>
          <Col md="6">
            <AvField
              name="paramOne"
              label="PackageName"
              value={paramOne}
              onChange={(e) => setParamOne(e.target.value)}
              required
            />
          </Col>
          <Col me="6">
            <AvField
              name="paramTwo"
              label="Activity"
              value={paramTwo}
              onChange={(e) => setParamTwo(e.target.value)}
              required
            />
          </Col>
        </>
      );
    }
  };
  return (
    <Fragment>
      <div>
        <PageTitle
          heading="Command Table"
          icon="pe-7s-medal icon-gradient bg-tempting-azure"
          parentlink="Command"
          sublink="Command"
        />
      </div>
      <Row>
        <Col md="2">
          <Button
            className="mb-2 mr-2 btn-icon"
            color="info"
            onClick={(e) => setShow(true)}
          >
            <i className="pe-7s-science btn-icon-wrapper"> </i>
            Add Command
          </Button>
        </Col>
        <Col md="2">
          <Input
            type="text"
            name="devid"
            id="devid"
            placeholder="Please insert DeviceId"
            value={devId}
            onChange={(e) => setDevId(e.target.value)}
          />
        </Col>
        <Col md="2">
          <Button color="info" onClick={handleGetCommand}>
            <i className="pe-7s-science btn-icon-wrapper"> </i>
            Get DeviceInfo
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md="12">
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
          width={700}
        >
          <ModalHeader>Add Commands</ModalHeader>
          <ModalBody>
            <Row>
              <Col md="12">
                <FormGroup>
                  <Label for="type">Type</Label>
                  <Combobox
                    data={value}
                    value={type}
                    allowCreate="onFilter"
                    onChange={(value) => changeType({ value })}
                    textField="name"
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <AvField
                  name="deviceId"
                  label="DeviceId"
                  value={deviceId}
                  onChange={(e) => setDeviceId(e.target.value)}
                  required
                />
              </Col>
              <Col md="6">
                <AvField
                  name="school"
                  label="School"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  required
                />
              </Col>
              {getUiFormByType()}
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={(e) => setShow(false)}>
              Cancel
            </Button>
            <Button color="success" onClick={addCommand}>
              Save
            </Button>
          </ModalFooter>
        </Rodal>
      </AvForm>
    </Fragment>
  );
};
export default AggregationTable;
