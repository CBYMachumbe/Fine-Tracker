import React, { useState, forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function AddFineDialog({ open, setOpen }) {
  const [fineeId, setFineeId] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleFineeChange = (e) => {
    setFineeId(e.target.value);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        container={() => document.getElementById("fine-tracker-main-content")}
        aria-describedby="add-fine-dialog"
        fullWidth={true}
      >
        <DialogTitle>{"Create fine post"}</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ marginTop: 2 }}>
            <InputLabel id="finee-select-label">
              Who are are we fining today?
            </InputLabel>
            <Select
              labelId="finee-select-label"
              id="demo-simple-select"
              value={fineeId}
              required
              label="Who are are we fining today?"
              onChange={handleFineeChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label={`What did ${fineeId ? fineeId : "this person"} do?`}
            multiline
            rows={4}
            required
            sx={{ marginTop: 2 }}
            fullWidth
            placeholder="What did this person do?"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Post
          </Button>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
