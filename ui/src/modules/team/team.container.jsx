import React, { useState } from "react";
import { Button, Container, Stack, Typography } from "@mui/material";
import { routeDefinitions } from "../../lib/routes";
import AddIcon from "@mui/icons-material/PersonAdd";
import { TeamDataGrid } from "./teamDataGrid";
import { AddTeamMemberDialog } from "./addTeamMemberDialog";

export function TeamContainer() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };
  return (
    <Container>
      <AddTeamMemberDialog open={isDialogOpen} setOpen={setIsDialogOpen} />
      <Stack>
        <div style={{ margin: 15 }}>
          <Typography variant="h4">{routeDefinitions.team.name}</Typography>
          <Stack direction="row">
            <Typography variant="h5" sx={{ marginTop: 2 }}>
              {"Insert team name here"}
            </Typography>
            <Button
              variant="contained"
              onClick={openDialog}
              endIcon={<AddIcon />}
              sx={{
                marginLeft: "auto",
              }}
            >
              add new team member
            </Button>
          </Stack>
        </div>
        <TeamDataGrid />
      </Stack>
    </Container>
  );
}
