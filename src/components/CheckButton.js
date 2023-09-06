import React from "react";
import { Box, IconButton } from "@mui/material";
import checkImg from "../img/icon-check.svg";

const CheckButton = () => {
  return (
    <Box>
      <IconButton
        sx={{
          background:
            "linear-gradient(to right,hsl(192, 100%, 67%),hsl(280, 87%, 65%))",
          borderRadius: "50%",
        }}
      >
        <img src={checkImg} />
      </IconButton>
    </Box>
  );
};

export default CheckButton;
