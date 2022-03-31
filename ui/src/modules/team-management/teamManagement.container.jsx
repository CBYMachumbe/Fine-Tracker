import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import { routeDefinitions } from "../../lib/routes";
import { TeamManagement } from "./teamManagement";

export default function TeamManagementContainer() {
  return (
    <Container>
      <Stack>
        <div style={{ margin: 15 }}>
          <Typography variant="h4">
            {routeDefinitions.teamManagement.name}
          </Typography>
        </div>
        <TeamManagement />
      </Stack>
    </Container>
  );
}
