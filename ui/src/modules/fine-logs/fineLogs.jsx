import React from "react";
import PropTypes from "prop-types";
import { Container, Stack, Typography } from "@mui/material";
import { routeDefinitions } from "../../lib/routes";
import { LogDataGrid } from "./logDataGrid";

export function FineLogs(props) {
  return (
    <Container>
      <Stack>
        <div style={{ margin: 15 }}>
          <Typography variant="h4">{routeDefinitions.logs.name}</Typography>
        </div>
        <LogDataGrid />
      </Stack>
    </Container>
  );
}

FineLogs.propTypes = {
  data: PropTypes.array,
};
