import React, { useState, Fragment, useEffect } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import CommandService from "../../../services/CommandService";
import AggregationTable from "./Pivoting";
import commandColumns from "./costant";
import devColumns from "./devInfoColumn";
import moment from "moment";

const DeviceDetailTabel = (props) => {
  const [commandData, setCommandData] = useState([]);
  const [devData, setDevData] = useState([]);

  useEffect(() => {
    CommandService.getCommandsByDeviceId(props.match.params.devid).then(
      (res) => {
        setCommandData(res);
      }
    );
    CommandService.getDevice(props.match.params.devid).then((res) => {
      let currentRes = res;
      let now = new Date();
      now.setTime(res.lastCheckIn);
      currentRes.lastCheckIn = moment(now).format("MMMM Do hh:mm:ss a");
      setDevData([currentRes]);
    });
  }, []);

  return (
    <Fragment>
      <CSSTransitionGroup
        ccomponent="div"
        transitionName="TabsAnimation"
        transitionAppear={true}
        transitionAppearTimeout={0}
        transitionEnter={false}
        transitionLeave={false}
      >
        <AggregationTable
          cHeader={commandColumns}
          cTableData={commandData}
          dHeader={devColumns}
          dTableData={devData}
        />
      </CSSTransitionGroup>
    </Fragment>
  );
};

export default DeviceDetailTabel;
