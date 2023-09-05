import { styled, Button } from "@mui/material";

export const CustomButton = styled(Button)((styleProps) => ({
  backgroundColor: "white",
  color: styleProps.theme.palette.primary.main,
  borderRadius: styleProps.theme.spacing(0.95),
  padding: styleProps.theme.spacing(2, 3),
}));
