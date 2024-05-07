import { Box, CircularProgress } from "@mui/material";

export const Loader = () => (
  <Box
    sx={{
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      height: "80vh",
    }}
  >
    <CircularProgress />
  </Box>
);
