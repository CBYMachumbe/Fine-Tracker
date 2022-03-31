import React, { forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TextField } from "@mui/material";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function AddTeamMemberDialog({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        container={() => document.getElementById("fine-tracker-main-content")}
        aria-describedby="add-team-member-dialog"
        fullWidth={true}
      >
        <DialogTitle>{"add new team member"}</DialogTitle>
        <DialogContent>
          <TextField
            sx={{ marginTop: 2 }}
            label="name"
            type="text"
            required
            fullWidth
            placeholder="enter team member name"
          />
          <TextField
            label="email"
            type="email"
            required
            sx={{ marginTop: 2 }}
            fullWidth
            placeholder="enter team member email"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            add user
          </Button>
          <Button variant="outlined" onClick={handleClose}>
            cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
