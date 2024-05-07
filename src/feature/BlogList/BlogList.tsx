import { Pagination, Paper } from "@mui/material";

import { ErrorMessage, Loader } from "../../shared/ui";
import { useGetBlogList } from "./hooks";
import { List } from "./ui";


export const BlogList = () => {
  const { list, isLoading, isError, page, totalPages, handleChangePage } =
    useGetBlogList();

  if (isLoading) return <Loader />;

  if (isError) return <ErrorMessage />;

  return (
    <Paper
      sx={{
        p: 2,
        mb: 4,
        mt: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChangePage}
        shape="rounded"
      />

      <List list={list} />

      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChangePage}
        shape="rounded"
      />
    </Paper>
  );
};
