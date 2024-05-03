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
import MeetingService from "../../../../services/MeetingService";
import { toast, Slide } from "react-toastify";
const notify22 = (type) => {
  const toastId = toast("Meeting added successfully", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 7000,
    hideProgressBar: true,
    type: type,
  });
};
const AggregationTable = (props) => {
  const { tableData, header } = props;
  const [data, setData] = useState(tableData || []);
  const [columns] = useState(header || []);
  const [show, setShow] = useState(false);
  const [meetingName, setMeetingName] = useState("");
  const [school, setSchool] = useState("");
  const handleSave = () => {
    const payload = {
      meetingName,
      school,
      meetingId: "",
    };
    MeetingService.addMeetings(payload).then((res) => {
      setData([...data, res]);
      setShow(false);
      if(res) notify22("success");
      else notify22("warning")
    });
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
            heading="Meeting Table"
            icon="pe-7s-medal icon-gradient bg-tempting-azure"
            parentlink="Meeting"
            sublink="Meeting"
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
              Add Meeting
            </Button>
            <Card className="main-card mb-3">
              <CardBody>
                <ReactTable
                  data={data}
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
                    name="meetingName"
                    label="MeetingName"
                    value={meetingName}
                    onChange={(e) => setMeetingName(e.target.value)}
                    required
                  />
                  <AvField
                    name="school"
                    label="School"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    required
                  />
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={(e) => setShow(false)}>
                Cancel
              </Button>
              <Button color="success" onClick={(e) => handleSave()}>
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
