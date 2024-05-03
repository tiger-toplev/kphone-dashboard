const initialState = {
  tableData: [],
  totalPages: 0,
};

export default function device(state = initialState, action) {
  switch (action.type) {
    case "DEVICES/GETDEVLIST":
      return {
        ...state,
        tableData: action.tableData,
      }; 
      case "DEVICES/SETPAGES":
      return {
        ...state,
        totalPages: action.totalPages,
      };
    default:
      return state;
  }
}
