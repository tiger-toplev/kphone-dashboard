import React, { Fragment } from "react";
import AppService from "../../../../services/AppService";
import {
  UncontrolledButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const columns = (props) => {

  const handleDelete = (packageName) => {
      props.handleDel(packageName);
  };
  return [
    {
      Header: "App Table",
      columns: [
        {
          Header: "PackageName",
          accessor: "packageName",
        },
        {
          Header: "VersionCode",
          accessor: "versionCode",
        },
        {
          Header: "URL",
          accessor: "url",
          width: 500,
        },
        {
          Header: "Action",
          accessor: "action",
          Cell: (row) => (
            <div className="d-block w-100 text-center">
              <UncontrolledButtonDropdown>
                <DropdownToggle
                  caret
                  className="btn-icon btn-icon-only btn btn-link"
                  color="link"
                >
                  <i className="lnr-menu-circle btn-icon-wrapper" />
                </DropdownToggle>
                <DropdownMenu className="rm-pointers dropdown-menu-hover-link">
                  <DropdownItem header>Actions</DropdownItem>
                  {/* <DropdownItem onClick={() => handleGetData(row.original.packageName)}>
                  <i className="dropdown-icon lnr-pencil"> {" "} </i>
                  <span>View</span>
                </DropdownItem> */}
                  <DropdownItem
                    onClick={(e) => handleDelete(row.original.packageName)}
                  >
                    <i className="dropdown-icon lnr-trash"> </i>
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
};
export default columns;
