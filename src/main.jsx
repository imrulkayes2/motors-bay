

import ReactDOM from "react-dom/client";
import MyCreateRoute from "./MyCreateRoute/MyCreateRoute";
import { RouterProvider } from "react-router";
import React from "react";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
  <RouterProvider router={MyCreateRoute} />
</React.StrictMode>
);
