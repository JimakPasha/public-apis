import { FC } from "react";

interface ErrorPageProps {
  type: "unknownError" | "notFound";
}

export const ErrorPage: FC<ErrorPageProps> = ({ type }) => (
  <div>Error: {type}</div>
);
