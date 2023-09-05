import { createTheme } from "@mui/material";
import "@fontsource/roboto";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#25273C",
      mode: "light",
    },
    secondary: {
      main: "#fff",
    },
    third: {
      main: "#57ddaa",
    },
  },
  typography: {
    h1: {
      fontSize: 38,
      fontWeight: "900",
      fontFamily: "roboto",
      color: "#fff",
      letterSpacing: "1.05rem",
    },
    h2: {
      fontSize: 28,
      fontWeight: "700",
    },
    h3: {
      fontSize: 18,
      fontWeight: "600",
    },
  },
});

export default theme;
