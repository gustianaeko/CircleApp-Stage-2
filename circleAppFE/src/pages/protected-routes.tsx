import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/use-store";

export function ProtectedRoutes() {
  const user = useAppSelector((state) => state.auth);

  if (!Object.keys(user).length) return null;

  if (user.id && user.role === "MEMBER") return <Outlet />;

  return <Navigate to={"/login"} />;
}
