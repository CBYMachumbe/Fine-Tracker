import React from "react";
import PropTypes from "prop-types";
import { TeamDataGrid } from "./teamManagementDataGrid";
import { Button, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";

export function TeamManagement(props) {
  return (
    <div>
      <Stack direction="row" mb={2}>
        <Button
          variant="contained"
          endIcon={<Add />}
          sx={{
            marginLeft: "auto",
          }}
        >
          add new team
        </Button>
      </Stack>

      <TeamDataGrid />
    </div>
  );
}

TeamManagement.propTypes = {
  data: PropTypes.object,
};
