import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import { FineList } from "./fineList";
import { LetsFineSomeoneCard } from "./letsFineSomeoneCard";
import { routeDefinitions } from "../../lib/routes";

export function HomeContainer() {
  return (
    <Container>
      <Stack>
        <div style={{ margin: 15 }}>
          <Typography variant="h4">{routeDefinitions.home.name}</Typography>
          <LetsFineSomeoneCard />
        </div>
        <FineList />
      </Stack>
    </Container>
  );
}
