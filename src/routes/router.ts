import routeURLs from "./routes";

import MainLayout from "../layouts/MainLayout";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import IntroducePage from "../pages/IntroducePage/IntroducePage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import ContactPage from "../pages/ContactPage/ContactPage";

import AdminPage from "../pages/AdminPage/AdminPage";

const routeLinks = [
  // User
  { path: routeURLs.home, component: AboutUsPage, layout: MainLayout },
  { path: routeURLs.aboutUs, component: IntroducePage, layout: MainLayout },
  { path: routeURLs.products, component: ProductsPage, layout: MainLayout },
  { path: routeURLs.services, component: ServicesPage, layout: MainLayout },
  { path: routeURLs.contact, component: ContactPage, layout: MainLayout },

  // Admin
  { path: routeURLs.admin, component: AdminPage, layout: MainLayout },
  { path: routeURLs.aboutUsAdmin, component: AboutUsPage, layout: MainLayout },
  {
    path: routeURLs.productsAdmin,
    component: ProductsPage,
    layout: MainLayout,
  },
  { path: routeURLs.contactAdmin, component: ContactPage, layout: MainLayout },
];

export default routeLinks;
