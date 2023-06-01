import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
  },
]);

export default router;
