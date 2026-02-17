import { useAuth } from "../../context/Auth";
import { Navigate, Outlet } from "react-router-dom";

export default function UserRoute() {
  const [auth] = useAuth();

  if (!auth?.user) {
    return <Navigate to="/login" replace />;
  }

  if (Number(auth.user.role) !== 0) {
    return <Navigate to="/dashboard/admin" replace />;
  }

  return <Outlet />;
}
