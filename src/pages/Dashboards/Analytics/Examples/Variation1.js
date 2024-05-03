import React, { Component, Fragment, useState, useEffect } from "react";
import { Row, Col, Button, CardHeader, Container, Card } from "reactstrap";
import OtherService from "../../../../services/OtherService";
import Select from "react-select";

const AnalyticsDashboard1 = () => {
  const [healthState, setHealthState] = useState(null);
  const [signature, setSignature] = useState(null);
  const [selectedOption, setSelectOption] = useState(null);
  useEffect(() => {
    OtherService.healthCheck().then((res) => {
      setHealthState(res);
    });
  }, []);
  const updateSchool = () => {
    OtherService.updateSchool().then((res) => {
      alert(JSON.stringify(res));
    });
  };
  const getSignature = () => {
    OtherService.getSignature().then((res) => {
      alert(JSON.stringify(res));
    });
  };

  return (
    <Fragment>
      <Container fluid>
        <Card className="mb-3">
          <CardHeader className="card-header-tab z-index-6">
            <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
              <i className="header-icon lnr-charts icon-gradient bg-happy-green">
                {" "}
              </i>
              Health Check Api
            </div>
          </CardHeader>
          <Row className="no-gutters">
            <Col sm="6" md="4" xl="4">
              <div className="card no-shadow rm-border bg-transparent widget-chart text-left">
                <div className="icon-wrapper rounded-circle">
                  <div className="icon-wrapper-bg opacity-10 bg-warning" />
                  <i className="lnr-laptop-phone text-dark opacity-8" />
                </div>
                <div className="widget-chart-content">
                  <div className="widget-subheading">Health Check</div>
                  <div className="widget-numbers">{healthState}</div>
                </div>
              </div>
              <div className="divider m-0 d-md-none d-sm-block" />
            </Col>
          </Row>
        </Card>
        <Card className="mb-3">
          <CardHeader className="card-header-tab z-index-6">
            <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
              <i className="header-icon lnr-charts icon-gradient bg-happy-green">
                {" "}
              </i>
              Update School List
            </div>
          </CardHeader>
          <Row className="no-gutters">
            <Col sm="6" md="4" xl="4">
              <div className="card no-shadow rm-border bg-transparent widget-chart text-left">
                <div className="icon-wrapper rounded-circle">
                  <div className="icon-wrapper-bg opacity-10 bg-warning" />
                  <i className="lnr-laptop-phone text-dark opacity-8" />
                </div>
                <div className="widget-chart-content">
                  <div className="widget-subheading">Update School Listk</div>
                  <div className="widget-numbers">
                    <Button
                      color="focus"
                      className="btn-wide btn-pill btn-shadow fsize-1"
                      size="lg"
                      onClick={updateSchool}
                    >
                      Update School List
                    </Button>
                  </div>
                </div>
              </div>
              <div className="divider m-0 d-md-none d-sm-block" />
            </Col>
          </Row>
        </Card>
        {/* <Card className="mb-3">
          <CardHeader className="card-header-tab z-index-6">
            <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
              <i className="header-icon lnr-charts icon-gradient bg-happy-green">
                {" "}
              </i>
              Generate Zoom Signature
            </div>
          </CardHeader>
          <Row className="no-gutters">
            <Col sm="6" md="4" xl="4">
              <div className="card no-shadow rm-border bg-transparent widget-chart text-left">
                <div className="icon-wrapper rounded-circle">
                  <div className="icon-wrapper-bg opacity-10 bg-warning" />
                  <i className="lnr-laptop-phone text-dark opacity-8" />
                </div>
                <div className="widget-chart-content">
                  <div className="widget-subheading">Generate Zoom Signature</div>
                  <div className="widget-numbers">
                    <Button
                      color="focus"
                      className="btn-wide btn-pill btn-shadow fsize-1"
                      size="lg"
                      onClick={getSignature}
                    >
                      Generate Zoom Signature
                    </Button>
                    <div className="widget-numbers">{signature}</div>
                  </div>
                </div>
              </div>
              <div className="divider m-0 d-md-none d-sm-block" />
            </Col>
          </Row>
        </Card> */}
      </Container>
    </Fragment>
  );
};
export default AnalyticsDashboard1;
