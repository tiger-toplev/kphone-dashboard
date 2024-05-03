import React, { useState, Fragment, useEffect } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import MeetingService from "../../../../services/MeetingService";
import AggregationTable from "./Pivoting";
import columns from "./costant";
const initialData = [{
  meetingName: "testnewsystem",
  school: "Yeshiva Ktana of Passaic - Girls",
  meetingId: "0123234234",
}];
const MeetingTable = () => {
  const [data, setData] = useState(initialData);
  // useEffect(() => {
  //   MeetingService.getMeetings().then((res) => {
  //     setData(res);
  //   });
  // }, []);
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
        {data != null ? (
          <AggregationTable header={columns} tableData={data} />
        ) : null}
      </CSSTransitionGroup>
    </Fragment>
  );
};

export default MeetingTable;
