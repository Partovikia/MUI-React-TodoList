import React from "react";
import { IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const DeleteButton = () => {
  return (
    <Box>
      <IconButton aria-label="delete">
        <CloseIcon />
      </IconButton>
    </Box>
  );
};

export default DeleteButton;
