import React, { Fragment } from "react";
import MeetingService from "../../../../services/MeetingService";
import {
  UncontrolledButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { toast, Slide } from "react-toastify";
const notify22 = (type) => {
  const toastId = toast("Meeting deleted successfully", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 7000,
    hideProgressBar: true,
    type: type,
  });
}

const handleDelete = (rowid) => {
  MeetingService.delMeetings(rowid).then(res => {
    if(res) notify22("success");
      else notify22("warning")
  })
}

const columns = [
  {
    Header: "Meeting Table",
    columns: [
      {
        Header: "MeetingName",
        accessor: "meetingName",
      },
      {
        Header: "School",
        accessor: "school",
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: (row) => (
          <div className="d-block w-100 text-center">
            <UncontrolledButtonDropdown>
              <DropdownToggle caret className="btn-icon btn-icon-only btn btn-link" color="link">
                <i className="lnr-menu-circle btn-icon-wrapper" />
              </DropdownToggle>
              <DropdownMenu className="rm-pointers dropdown-menu-hover-link">
                <DropdownItem header>Actions</DropdownItem>
                {/* <DropdownItem onClick={() => handleGetData(row.original.packageName)}>
                  <i className="dropdown-icon lnr-pencil"> {" "} </i>
                  <span>View</span>
                </DropdownItem> */}
                <DropdownItem onClick={(e) => handleDelete(row.original.id)}>
                  <i className="dropdown-icon lnr-trash"> {" "} </i>
                  <span>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
        ),
      },
    ],
  },
];
export default columns;
