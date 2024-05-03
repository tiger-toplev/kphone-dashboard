import React, { useState, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import AggregationTable from "./Pivoting";
import columns from "./costant";
import {
  getCommandAction,
  addCommandAction,
  delCommandAction,
} from "../../../../actions/command";
import { toast } from "react-toastify";

const CommandTable = () => {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.command.tableData);
  const actionState = useSelector((state) => state.command.actionState);

  useEffect(() => {
    dispatch(getCommandAction());
    console.log('asdfasdf');
  }, []);

  const notify22 = (actionState, title) => {
    const toastId = toast(title, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 7000,
      hideProgressBar: true,
      type: actionState ? "success" : "warning",
    });
  };
  const handleSave = async (payload) => {
    await dispatch(addCommandAction(payload));
    console.log(actionState);
    notify22(actionState, "Command added successfully");
  };
  const handleDel = (rowid) => {
    dispatch(delCommandAction(rowid));
    console.log(actionState);
     notify22(actionState, "Command deleted successfully");
  };
  const tableColumn = columns({ handleDel });
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
          header={tableColumn}
          tableData={tableData}
          handleSave={handleSave}
        />
      </CSSTransitionGroup>
    </Fragment>
  );
};

export default CommandTable;
