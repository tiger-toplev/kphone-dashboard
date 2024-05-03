import React from "react";
import { Link } from "react-router-dom";

const columns = [
  {
    Header: "Devices Table",
    columns: [
      {
        Header: "Serial",
        accessor: "serial",
        Cell: (row) => (
          <Link to={`/admin/device/${row.original.serial}`}>
            {row.original.serial}
          </Link>
        ),
      },
      {
        Header: "School",
        accessor: "school",
      },
      {
        Header: "LastCheckIn",
        accessor: "lastCheckIn",
      },
    ],
  },
];
export default columns;
