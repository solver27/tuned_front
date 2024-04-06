/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home/Home"));
const Profile = lazy(() => import("../pages/Profile/Profile"));
const Page404 = lazy(() => import("../pages/404"));
const Blank = lazy(() => import("../pages/Blank"));
const GenresDetail = lazy(()=> import("../pages/Home/GenresDetail"));

const routes = [
  {
    path: "/home",
    icon: "./home.svg",
    name: "Home",
    component: Home,
  },
  {
    path: "/genres",
    icon: "GenersIcon",
    name: "Geners",
    component: Home,
  },
  {
    path: "/favorites",
    icon: "FavoritesIcon",
    name: "Favorites",
    component: Home,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/genres/:id",
    component: GenresDetail,
  }
];

export default routes;
