import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Stack } from "@mui/material";

export function FineCard() {
  return (
    <Card variant="outlined" sx={{ maxHeight: 250 }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">JM</Avatar>}
        title="Jacob Muzonde"
        subheader="Fine on Kelvin"
      />
      <CardContent>
        <Typography variant="body2">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Incidunt, soluta. Consequuntur error impedit commodi
          quidem ipsa, natus dolore dicta molestiae id ullam ratione illo quas
          laborum deleniti! Nemo, doloremque ex.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Stack direction="row" spacing={0}>
          <IconButton aria-label="agree">
            <ThumbUpIcon />
          </IconButton>
          <Typography style={{ marginTop: 10 }} variant="subtitle2">
            10
          </Typography>
        </Stack>
        <Stack direction="row" spacing={0}>
          <IconButton aria-label="disagree">
            <ThumbDownIcon />
          </IconButton>
          <Typography style={{ marginTop: 10 }} variant="subtitle2">
            20
          </Typography>
        </Stack>
        <Typography marginLeft="auto" variant="subtitle2">
          20 mins ago
        </Typography>
      </CardActions>
    </Card>
  );
}
