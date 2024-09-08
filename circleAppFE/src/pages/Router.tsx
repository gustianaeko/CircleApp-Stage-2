import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginRoute } from "./login";
import { RegisterRoute } from "./register";
import { ForgotRoute } from "./forgot";
import { ResetRoute } from "./reset";
import { HomeRoute } from "./home";

export function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginRoute />,
    },
    {
      path: "/login",
      element: <LoginRoute />,
    },
    {
      path: "/register",
      element: <RegisterRoute />,
    },
    {
      path: "/forgot",
      element: <ForgotRoute />,
    },
    {
      path: "/reset",
      element: <ResetRoute />,
    },
    {
      path: "/home",
      element: <HomeRoute />,
    },
  ]);

  return <RouterProvider router={router} />;
}
