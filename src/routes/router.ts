import routeURLs from "./routes";

import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage/HomePage";

const routeLinks = [
  { path: routeURLs.home, component: HomePage, layout: MainLayout },
];

export default routeLinks;
