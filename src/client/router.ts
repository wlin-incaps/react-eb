import { RouteConfig } from "react-router-config";

import Home from "./components/home";
import Items from "./components/items";
import NotFound from "./components/notFound";
import Root from "./root";

export const routes: RouteConfig[] = [
  {
    component: Root,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home,
      },
      {
        path: "/items",
        component: Items,
      },
      {
        path: "*",
        component: NotFound,
      },
    ],
  },
] as any;
