import React from "react";
import CommandService from "../../../../services/CommandService";
import {
  UncontrolledButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const columns = (props) => {
  const handleUpDate = (deviceId) => {
    CommandService.UpdateSchool(deviceId).then((res) => {
      alert(JSON.stringify(res));
    });
  };
  const handleActive = () => {
    CommandService.active().then((res) => {
      alert(JSON.stringify(res));
    });
  };

  const handleGetDevice = (deviceId) => {
    if (!deviceId) {
      alert("No Device ID");
      return;
    }
    CommandService.getDevice(deviceId).then((res) => {
      alert(JSON.stringify(res));
    });
  };

  return [
    {
      Header: "Command Table",
      columns: [
        {
          Header: "DeviceId",
          accessor: "deviceId",
          width: 150,
        },
        {
          Header: "School",
          accessor: "school",
          width: 100,
        },
        {
          Header: "Type",
          accessor: "type",
        },
        {
          Header: "ParamOne",
          accessor: "paramOne",
          width: 480,
        },
        {
          Header: "ParamTwo",
          accessor: "paramTwo",
          width: 300,
        },
        {
          Header: "ParamThree",
          accessor: "paramThree",
        },
        {
          Header: "ParamFour",
          accessor: "paramFour",
        },
        {
          Header: "ParamFive",
          accessor: "paramFive",
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
                  <DropdownItem
                    onClick={() => handleUpDate(row.original.deviceId)}
                  >
                    <i className="dropdown-icon lnr-pencil"> </i>
                    <span>Update</span>
                  </DropdownItem>
                  <DropdownItem onClick={(e) => props.handleDel(row.original.id)}>
                    <i className="dropdown-icon lnr-trash"> </i>
                    <span>Delete</span>
                  </DropdownItem>
                  {/* <Device row={row}/> */}
                  {/* <DropdownItem onClick={(e) => handleGetDevice(row.original.deviceId)}>
                  <i className="dropdown-icon lnr-link"> {" "} </i>
                  <span>Devices</span>
                </DropdownItem> */}
                  <DropdownItem onClick={(e) => handleActive()}>
                    <i className="dropdown-icon lnr-link"> </i>
                    <span>Active</span>
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
