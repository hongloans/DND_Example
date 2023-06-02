import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./pages/router";
import { RouterProvider } from "react-router-dom";
import MainTheme from "./mainTheme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MainTheme>
      <RouterProvider router={router} />
    </MainTheme>
  </React.StrictMode>
);
