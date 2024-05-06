import { useParams } from "react-router-dom";
import { useGetBlogItem } from "./hooks";
import { Card, CardContent, Typography } from "@mui/material";
import { ErrorMessage, Loader } from "../../shared/ui";
import { formatDate } from "../../shared/lib";

export const BlogItem = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetBlogItem({ id });

  if (isLoading) return <Loader />;

  if (isError) return <ErrorMessage />;

  if (data) {
    const { image_url, title, news_site, summary, published_at, updated_at } =
      data;

    return (
      <Card sx={{ m: 2 }}>
        <Card
          sx={{ width: 260, overflow: "hidden", p: 1, margin: "10px auto" }}
        >
          <img
            src={image_url}
            alt={title}
            style={{ width: "100%", height: "auto" }}
          />
        </Card>
        <CardContent>
          <Typography variant="h5" align="center">
            {title}
          </Typography>
          <Typography pb={4} pt={4}>
            {summary}
          </Typography>
          <Typography variant="subtitle1" align="right">
            {news_site}
          </Typography>
          <Typography variant="subtitle2" align="right">
            Published at: {formatDate(published_at)}
          </Typography>
          <Typography variant="subtitle2" align="right">
            Published at: {formatDate(updated_at)}
          </Typography>
        </CardContent>
      </Card>
    );
  }
};
