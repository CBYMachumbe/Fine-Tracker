import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const rows = [
  {
    id: 1,
    name: "Service Desk",
    members: ["admin", "member"],
    logo: "https://miro.medium.com/max/1400/1*WVc4cYbMtflHUt1Xyks1pg.png",
    admin: "William (william@email.com)",
  },
  {
    id: 2,
    name: "Bee 123",
    logo: "https://miro.medium.com/max/1400/1*WVc4cYbMtflHUt1Xyks1pg.png",
    members: ["member"],
    admin: "Ash (ash@email.com)",
  },
  {
    id: 3,
    name: "nigel",
    logo: "https://miro.medium.com/max/1400/1*WVc4cYbMtflHUt1Xyks1pg.png",
    members: ["member"],
    admin: "Dale (dale@email.com)",
  },
];

const columns = [
  {
    field: "logo",
    headerName: "",
    width: 100,
    disableColumnMenu: true,
    sortable: false,
    filterable: false,
    editable: false,
    renderCell: (params) => {
      return <Avatar src={params.value} />;
    },
  },
  {
    field: "name",
    headerName: "name",
    width: 170,
    disableColumnMenu: true,
    editable: false,
  },
  {
    field: "members",
    headerName: "# of members",
    filterable: false,
    width: 150,
    disableColumnMenu: true,
    editable: false,
    valueFormatter: (params) => {
      return params.value.length;
    },
  },
  {
    field: "admin",
    headerName: "team admin",
    minWidth: 250,
    disableColumnMenu: true,
    editable: false,
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
