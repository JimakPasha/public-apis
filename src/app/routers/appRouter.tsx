import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, BlogItemPage, ErrorPage } from "../../pages";
import { Layout } from "../layout";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage type={"unknownError"} />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/:id", element: <BlogItemPage /> },
      ],
    },
    {
      path: "*",
      element: <ErrorPage type={"notFound"} />,
    },
  ]);

  return <RouterProvider router={router} />;
};
