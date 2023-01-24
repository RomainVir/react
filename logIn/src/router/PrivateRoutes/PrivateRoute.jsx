import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

export default function PrivateRoute() {
  const { authorization } = useAuthContext();

  if (!authorization) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
