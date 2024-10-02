import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginRoute } from "./login";
import { RegisterRoute } from "./register";
import { ForgotRoute } from "./forgot";
import { ResetRoute } from "./reset";
import { HomeRoute } from "./home";
import { ProfileRoute } from "./profile";
import { Search } from "../features/seacrh/main-layout/Search";
import { Follows } from "../features/follow/main-layout/Follow";
import { ProtectedRoutes } from "./protected-routes";

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
      element: <ProtectedRoutes />,
      children: [
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
      ],
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
  ]);

  return <RouterProvider router={router} />;
}
