import { useRoutes } from "react-router-dom";

import { HomePage, LibraryPage } from "./components/pages";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },

    {
      path: "/library",
      element: <LibraryPage />,
    },
  ]);

  return routes;
};

export default Router;
