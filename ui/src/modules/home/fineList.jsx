import React from "react";
import { FineCard } from "./fineCard";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import { FixedSizeList } from "react-window";

function renderFine(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div">
      <FineCard />
    </ListItem>
  );
}

export function FineList() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
      }}
    >
      <FixedSizeList
        height={800}
        itemSize={250}
        itemCount={50}
        overscanCount={5}
      >
        {renderFine}
      </FixedSizeList>
    </Box>
  );
}
