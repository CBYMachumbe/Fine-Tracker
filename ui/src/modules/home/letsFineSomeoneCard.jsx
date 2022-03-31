import React, { useState } from "react";
import Card from "@mui/material/Card";
import { Avatar, Button, CardHeader } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { AddFineDialog } from "./addFineDialog";

export function LetsFineSomeoneCard() {
  // Todo: have a list of random sh*t to display to the user
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <AddFineDialog open={open} setOpen={setOpen} />
      <Card variant="outlined" sx={{ marginTop: 2 }}>
        <CardHeader
          avatar={<Avatar aria-label="recipe">JM</Avatar>}
          title="whats on your mind, Jacob?"
          subheader="spotted something? lets fine them 😈"
          action={
            <Button
              variant="contained"
              endIcon={<AddIcon />}
              sx={{
                marginRight: 2,
              }}
              onClick={handleClickOpen}
            >
              fine somebody
            </Button>
          }
        />
      </Card>
    </div>
  );
}
