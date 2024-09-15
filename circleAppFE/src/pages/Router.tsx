import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginRoute } from "./login";
import { RegisterRoute } from "./register";
import { ForgotRoute } from "./forgot";
import { ResetRoute } from "./reset";
import { HomeRoute } from "./home";
import { ProfileRoute } from "./profile";

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
  ]);

  return <RouterProvider router={router} />;
}
