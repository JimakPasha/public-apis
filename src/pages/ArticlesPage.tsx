import { Typography } from "@mui/material";

import { ArticlesBoard } from "../feature";

export const ArticlesPage = () => (
  <div>
    <Typography
      variant="h2"
      fontWeight={600}
      fontSize={36}
      sx={{
        textTransform: "uppercase",
      }}
    >
      Articles
    </Typography>
    <ArticlesBoard />
  </div>
);
