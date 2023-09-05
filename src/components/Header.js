import React from "react";
import { Typography, IconButton, Box } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useTheme } from "@mui/material";

export default function Header() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Typography mr="21rem" variant="h1">
        TODO
      </Typography>
      <IconButton ml="21rem">
        {theme.palette.mode === "light" ? <DarkMode /> : <LightMode />}
      </IconButton>
    </Box>
  );
}
