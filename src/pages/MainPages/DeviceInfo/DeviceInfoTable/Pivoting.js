import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import _ from "lodash";
import infoColumns from "./costant";
import { getDevicesList, getDeviceById } from "../../../../actions/device";

import { Row, Col, Card, CardBody, Input, Button } from "reactstrap";
import PageTitle from "../../../../Layout/AppMain/PageTitle";
import ReactTable from "react-table";

const AggregationTable = () => {
  const dispatch = useDispatch();
  const infotableData = useSelector((state) => state.device.tableData.content || []);
  const totalPages = useSelector((state) => state.device.tableData.totalPages || 0);

  const [pageNum, setPageNum] = useState(1);
  const [pageSize, setPageSize] = useState(10);
 
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) dispatch(getDevicesList(pageNum, pageSize));
  }, []);

  const handelPage = (pageNum, pageSize) => {
    const token = localStorage.getItem("access_token");
    if (token) dispatch(getDevicesList(pageNum, pageSize));
  };

  const onPageChange = (pageIndex) => {
    let pageNum = pageIndex+1
    setPageNum(pageNum);
    handelPage(pageNum,pageSize);
  };
  const onPageSizeChange = (pageSize) => {
    setPageSize(pageSize);
    handelPage(pageNum,pageSize);
  }
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
            heading="Devices Table"
            icon="pe-7s-medal icon-gradient bg-tempting-azure"
            parentlink="DeviceInfo"
            sublink="DeviceInfo"
          />
        </div>
        <Row>
          <Col md="12">
            <Card className="main-card mb-3">
              <CardBody>
                <ReactTable
                  data={infotableData}
                  columns={infoColumns}
                  pageSize={pageSize}
                  pages={totalPages}
                  filterable
                  resizable
                  manual
                  onPageChange={onPageChange}
                  onPageSizeChange={onPageSizeChange}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </CSSTransitionGroup>
    </Fragment>
  );
};
export default AggregationTable;
