import {
  Avatar,
  Badge,
  Button,
  Card,
  Grid,
  IconButton,
  Box,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import { CameraAlt } from "@mui/icons-material";
import React, { createRef } from "react";
import { isNil } from "lodash";

export function Profile(props) {
  const fileInputRef = createRef(null);

  const onFileChange = (event) => {
    event.stopPropagation();
    event.preventDefault();
    // Todo: use ===> var file = event.target.files[0];
  };

  const onCameraClick = () => {
    if (!isNil(fileInputRef)) {
      fileInputRef.current.click();
    }
  };

  const FieldCard = (label, value, action, isEdit) => {
    return (
      <Box sx={{ minWidth: "100%" }}>
        <Stack direction="row" spacing={2} mt={2}>
          <TextField
            disabled={isEdit}
            sx={{ width: "70%" }}
            value={value}
            label={label}
          />
          <Button sx={{ width: "20%" }}>edit</Button>
        </Stack>
      </Box>
    );
  };
  return (
    <Card variant="outline" style={{ marginLeft: 15, padding: 10 }}>
      <Grid container direction="row" spacing={3}>
        <Grid item xs={3}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <IconButton color="primary" size="large" onClick={onCameraClick}>
                <CameraAlt fontSize="large" />
              </IconButton>
            }
          >
            <Avatar aria-label="user-avatar" sx={{ width: 200, height: 200 }}>
              <Typography variant="h3">JM</Typography>
            </Avatar>
          </Badge>
        </Grid>
        <Grid item xs={9} justify="flex-end">
          <Box display="flex" justifyContent="flex-end">
            <Stack sx={{ width: "90%" }}>
              {FieldCard("name", "Jacob Muzonde", () => {}, false)}
              {FieldCard("email", "jt.sliqe@gmail.com", () => {}, false)}
              {FieldCard("password", "pa55word123", () => {}, false)}
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <input
        id="avatar"
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={onFileChange}
      />
    </Card>
  );
}
