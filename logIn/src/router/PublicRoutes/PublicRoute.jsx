import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

export default function PublicRoute() {
  const { authorization } = useAuthContext();

  if (authorization) {
    return <Navigate to="/u" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
