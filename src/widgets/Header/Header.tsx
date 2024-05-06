import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Link to="/">
        <Typography
          sx={{ color: "#fff", textTransform: "uppercase", fontSize: "14px" }}
        >
          Blog
        </Typography>
      </Link>
    </Toolbar>
  </AppBar>
);
