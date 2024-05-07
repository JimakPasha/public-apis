import { FC } from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";

import { IArticle } from "../../../entities";

interface IBoardProps {
  board: IArticle[];
}

export const Board: FC<IBoardProps> = ({ board }) => (
  <Grid container spacing={3}>
    {board.map(({ id, title, image_url, summary }: IArticle) => (
      <Grid key={id} item xs={12} sm={6} md={4}>
        <Card style={{ height: "300px", width: "300px", overflow: "hidden" }}>
          <CardContent>
            <Typography
              variant="h6"
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </Typography>
            <img
              src={image_url}
              alt={title}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <Typography
              variant="body2"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {summary}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);
