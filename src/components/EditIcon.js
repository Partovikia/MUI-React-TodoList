import React from "react";
import { IconButton, Box } from "@mui/material";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

const EditButton = () => {
  return (
    <Box>
      <IconButton aria-label="edit">
        <PanoramaFishEyeIcon />
      </IconButton>
    </Box>
  );
};

export default EditButton;
