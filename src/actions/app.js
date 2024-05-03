import AppService from "../services/AppService";

export const setActionState = (actionState) => ({
  type: "APP/SETACTIONSTATE",
  actionState,
});

export const setTableData = (tableData) => ({
  type: "APP/SETTABLEDATA",
  tableData,
});

export const addRowData = (addRowData) => ({
  type: "APP/ADDROW",
  addRowData,
});

export const delRowData = (deletedRowId) => ({
  type: "APP/DELROW",
  deletedRowId,
});

export const getAppAction = () => {
  return dispatch => {
    AppService.getApps().then(res=>{
      dispatch(setTableData(res));
    })
  }
}

export const addAppAction = (payload) => {
  return dispatch => {
    AppService.addApps(payload).then((res) => {
      if (res) {
        dispatch(addRowData(res));
        dispatch(setActionState(true));
      } else dispatch(setActionState(false));
    });
  }
}

export const delAppAction = (rowId) => {
  return dispatch => {
    AppService.delApps(rowId).then((res) => {
      if (res) {
        dispatch(delRowData(rowId));
        dispatch(setActionState(true));
      } else dispatch(setActionState(false));
    });
  }
}