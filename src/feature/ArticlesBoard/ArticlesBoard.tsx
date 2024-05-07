import { Box, Chip, Typography } from "@mui/material";

import { ErrorMessage, Loader } from "../../shared/ui";
import { LIMIT_ARTICLE } from "../../entities";
import { useGetArticles } from "./hooks";
import { Board } from "./ui";
import { filters } from "./constants";

export const ArticlesBoard = () => {
  const { board, isLoading, isError, filter, handleFilterChange } =
    useGetArticles();

  if (isLoading) return <Loader />;

  if (isError) return <ErrorMessage />;

  return (
    <Box sx={{ pt: 2, pb: 2 }}>
      <Box
        sx={{ display: "flex", alignItems: "center", columnGap: "8px", pb: 2 }}
      >
        <Typography>TOP {LIMIT_ARTICLE}: </Typography>
        {filters.map(({ id, label, type }) => (
          <Chip
            key={id}
            label={label}
            clickable
            color={filter === type ? "primary" : "default"}
            onClick={() => handleFilterChange(type)}
          />
        ))}
      </Box>

      <Board board={board} />
    </Box>
  );
};
