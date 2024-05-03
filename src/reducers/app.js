const initialState = {
  tableData: [],
  actionState: true,
};
export default function app(state = initialState, action) {
  switch (action.type) {
    case "APP/SETTABLEDATA":
      return {
        ...state,
        tableData: action.tableData,
      };
    case "APP/ADDROW":
      return {
        ...state,
        tableData: [...state.tableData, action.addRowData],
      };
    case "APP/DELROW":
      let currentTableData = state.tableData;
      return {
        ...state,
        tableData: currentTableData.filter(
          (row) => row.packageName !== action.deletedRowId
        ),
      };
    case "APP/SETACTIONSTATE":
      return {
        ...state,
        actionState: true,
      };
    default:
      return state;
  }
}
