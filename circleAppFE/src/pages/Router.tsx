import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginRoute } from "./login";
import { RegisterRoute } from "./register";
import { ForgotRoute } from "./forgot";
import { ResetRoute } from "./reset";
import { HomeRoute } from "./home";
import { ProfileRoute } from "./profile";
import { Search } from "../features/seacrh/main-layout/Search";
import { Follows } from "../features/follow/main-layout/Follow";

export function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginRoute />,
    },
    {
      path: "/auth/login",
      element: <LoginRoute />,
    },
    {
      path: "/auth/register",
      element: <RegisterRoute />,
    },
    {
      path: "/auth/forgot",
      element: <ForgotRoute />,
    },
    {
      path: "/auth/reset",
      element: <ResetRoute />,
    },
    {
      path: "/home",
      element: <HomeRoute />,
    },
    {
      path: "/profile",
      element: <ProfileRoute />,
    },
    {
      path: "/search",
      element: <Search />,
    },
    {
      path: "/follows",
      element: <Follows />,
    },
  ]);

  return <RouterProvider router={router} />;
}
