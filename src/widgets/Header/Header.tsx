import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { links } from "./constants";

export const Header = () => (
  <AppBar position="static">
    <Toolbar sx={{ display: "flex", columnGap: "26px" }}>
      {links.map(({ id, title, path }) => (
        <Link key={id} to={path}>
          <Typography
            sx={{
              color: "#fff",
              textTransform: "uppercase",
              fontSize: "14px",
            }}
          >
            {title}
          </Typography>
        </Link>
      ))}
    </Toolbar>
  </AppBar>
);
