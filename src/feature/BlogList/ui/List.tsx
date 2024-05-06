import { FC } from "react";
import {
  Card,
  CardContent,
  List as ListMUI,
  ListItem,
  Typography,
} from "@mui/material";
import { IBlog } from "../../../entities";
import { formatDate } from "../../../shared/lib";
import { Link } from "react-router-dom";

interface IListProps {
  list: IBlog[];
}

export const List: FC<IListProps> = ({ list }) => (
  <ListMUI>
    {list.map(({ id, title, image_url, published_at, updated_at }) => (
      <ListItem key={id}>
        <Link
          to={`/${id}`}
          style={{
            width: "100%",
          }}
        >
          <Card
            raised
            sx={{
              width: "100%",
              display: "flex",
              p: 2,
              "&:hover": { boxShadow: "none", backgroundColor: "#FBFBFB" },
            }}
          >
            <Card
              raised
              style={{ width: 200, overflow: "hidden", display: "flex" }}
            >
              <img
                src={image_url}
                alt={title}
                style={{ width: "100%", height: "auto" }}
              />
            </Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                Published at: {formatDate(published_at)}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Updated at: {formatDate(updated_at)}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </ListItem>
    ))}
  </ListMUI>
);
