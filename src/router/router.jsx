import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import PlayerProfile from "../pages/PlayerProfile/PlayerProfile";
import Filter from "../pages/Filter/Filter";
import NewsArticle from "../pages/NewsArticle/NewsArticle";
import PlayersList from "../pages/PlayersList/PlayersList";
import Login from "../pages/AuthPage/Login";
import SignUp from "../pages/AuthPage/SignUp";
import ContactUs from "../pages/ContactUs/ContactUs";
import Pricing from "../pages/Pricing/Pricing";
import About from "../pages/About/About";
import Terms from "../pages/Terms/Terms";
import Privacy from "../pages/Privacy/Privacy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/player-profile/:id",
        element: <PlayerProfile />,
      },
      {
        path: "/filter",
        element: <Filter />,
      },
      {
        path: "/news-article/:id",
        element: <NewsArticle />,
      },
      {
        path: "/player-list",
        element: <PlayersList />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
    ],
  },
]);

export default router;
