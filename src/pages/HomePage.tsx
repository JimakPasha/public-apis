import { Typography } from "@mui/material";
import { BlogList } from "../feature";

export const HomePage = () => (
  <div>
    <Typography
      variant="h2"
      fontWeight={600}
      fontSize={36}
      sx={{
        textTransform: "uppercase",
      }}
    >
      Blog
    </Typography>
    <BlogList />
  </div>
);
