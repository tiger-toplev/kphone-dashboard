const initialState = {
  tableData: [],
  actionState: true,
  devTableData: [],
};

export default function command(state = initialState, action) {
  switch (action.type) {
    case "COMMAND/SETTABLEDATA":
      return {
        ...state,
        tableData: action.tableData,
      };
    case "COMMAND/SETDEVTABLEDATA":
      return {
        ...state,
        devTableData:[action.devTableData],
      };
    case "COMMAND/ADDROW":
      return {
        ...state,
        tableData: [...state.tableData, action.addRowData],
      };
    case "COMMAND/DELROW":
      let currentTableData = state.tableData;
      return {
        ...state,
        tableData: currentTableData.filter(
          (row) => row.id !== action.deletedRowId
        ),
      };
      case "COMMAND/SETACTIONSTATE":
        return {
          ...state,
          actionState: action.actionState,
        };
    default:
      return state;
  }
}
