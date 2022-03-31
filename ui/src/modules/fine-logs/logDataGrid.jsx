import React from "react";
import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
const tallyMarks = require("tally-marks");

const rows = [
  {
    id: 1,
    name: "Jacob",
    email: "jacob@gmail.com",
    totalFines: 50,
    paidFines: 10,
    outstandingFines: 20,
  },
  {
    id: 2,
    name: "Kelvin",
    email: "k@entelect.com",
    totalFines: 5,
    paidFines: 3,
    outstandingFines: 2,
  },
  {
    id: 3,
    name: "Mary",
    email: "mary@hotline.com",
    totalFines: 13,
    paidFines: 13,
    outstandingFines: 0,
  },
  {
    id: 4,
    name: "Kate",
    email: "kate@mail.com",
    totalFines: 25,
    paidFines: 3,
    outstandingFines: 22,
  },
];

const columns = [
  {
    field: "name",
    headerName: "name",
    width: 100,
    disableColumnMenu: true,
    editable: false,
  },
  {
    field: "email",
    headerName: "email",
    width: 170,
    disableColumnMenu: true,
    editable: false,
  },
  {
    field: "paidFines",
    headerName: "paid fines",
    disableColumnMenu: true,
    editable: false,
  },
  {
    field: "outstandingFines",
    headerName: "outstanding fines",
    width: 170,
    disableColumnMenu: true,
    editable: false,
  },
  {
    field: "totalFines",
    headerName: "total fines",
    minWidth: 300,
    disableColumnMenu: true,
    editable: false,
    renderCell: (params) => {
      return (
        <div>
          {tallyMarks(Number(params.value))} ({params.value})
        </div>
      );
    },
  },
];

export function LogDataGrid(props) {
  return (
    <Box sx={{ height: 500, width: "100%" }} style={{ marginLeft: 15 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pagination={<div>Something useful</div>}
      />
    </Box>
  );
}

LogDataGrid.propTypes = {
  data: PropTypes.array,
};
