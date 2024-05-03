import React, { useState, Fragment, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import AggregationTable from "./Pivoting";
import columns from "./costant";
import { getAppAction, addAppAction,delAppAction } from "../../../../actions/app";
import { toast } from "react-toastify";

const AppTable = () => {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.app.tableData);
  const actionState = useSelector((state) => state.app.actionState);
  useEffect(() => {
    dispatch(getAppAction());
  }, []);
  const notify22 = (actionState, title) => {
    const toastId = toast(title, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 7000,
      hideProgressBar: true,
      type: actionState ? "success" : "warning",
    });
  };
  const handleSave = (payload) => {
    dispatch(addAppAction(payload));
    notify22(actionState, "App added successfully");
  }
  const handleDel = (rowid) => {
    dispatch(delAppAction(rowid));
    notify22(actionState, "App deleted successfully");
  }
  const tableColumn = columns({handleDel})
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
        <AggregationTable header={tableColumn} tableData={tableData} handleSave={handleSave}/>
      </CSSTransitionGroup>
    </Fragment>
  );
};

export default AppTable;
