import React, { Fragment, useState, useEffect } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

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

const DataTableCustomComps = (props) => {
  const [data] = useState(props.tableData);
  const [columns] = useState(props.header);
  const [show, setShow] = useState(false);

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
            heading="Command Tables"
            icon="pe-7s-medal icon-gradient bg-tempting-azure"
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
              Add Command
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
        <Rodal
          visible={show}
          onClose={(e) => setShow(false)}
          animation="zoom"
          showMask={false}
        >
          <ModalHeader>Add Commands</ModalHeader>
          <ModalBody>
          
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={(e) => setShow(false)}>
              Cancel
            </Button>
            <Button color="success" onClick={(e) => setShow(false)}>
              Save
            </Button>
          </ModalFooter>
        </Rodal>
      </CSSTransitionGroup>
    </Fragment>
  );
};
export default DataTableCustomComps;
