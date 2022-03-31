import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import { routeDefinitions } from "../../lib/routes";
import { Profile } from "./profile";

export function ProfileContainer(props) {
  return (
    <Container>
      <Stack>
        <div style={{ margin: 15 }}>
          <Typography variant="h4">{routeDefinitions.profile.name}</Typography>
        </div>
      </Stack>
      <Profile />
    </Container>
  );
}
