import React from "react";
import PropTypes from "prop-types";
import { Box, Chip, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { map } from "lodash";
import { Person, PersonOff } from "@mui/icons-material";

const chipColor = (role) => {
  let color = "";
  switch (role) {
    case "master":
      color = "error";
      break;
    case "member":
      color = "warning";
      break;

    case "admin":
      color = "success";
      break;
    default:
      color = "primary";
      break;
  }
  return color;
};

const rows = [
  {
    id: 1,
    name: "Jacob",
    email: "jacob@gmail.com",
    status: true,
    roles: ["admin", "member"],
  },
  {
    id: 2,
    name: "Kelvin",
    email: "k@entelect.com",
    status: false,
    roles: ["member"],
  },
  {
    id: 3,
    name: "Mary",
    email: "mary@hotline.com",
    status: true,
    roles: ["member"],
  },
  {
    id: 4,
    name: "Kate",
    email: "kate@mail.com",
    status: true,
    roles: ["member"],
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
    field: "roles",
    headerName: "roles",
    sortable: false,
    filterable: false,
    width: 300,
    disableColumnMenu: true,
    editable: false,
    renderCell: (params) => {
      return (
        <Stack direction="row" spacing={1}>
          {map(params.value, (role) => (
            <Chip
              size="small"
              label={`${role}`}
              variant="outlined"
              color={chipColor(role)}
            />
          ))}
        </Stack>
      );
    },
  },
  {
    field: "status",
    headerName: "account status",
    minWidth: 150,
    disableColumnMenu: true,
    editable: false,
    align: "center",
    renderCell: (params) => {
      return params.value ? (
        <Person color="success" />
      ) : (
        <PersonOff color="error" />
      );
    },
  },
];

export function TeamDataGrid(props) {
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

TeamDataGrid.propTypes = {
  data: PropTypes.array,
};
