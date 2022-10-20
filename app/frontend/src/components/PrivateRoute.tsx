import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export type ProtectedRouteProps = {
  path: JSX.Element;
};

export default function ProtectedRoute({ path }: ProtectedRouteProps) {
  const { user } = useSelector((state: any) => state.auth);
  if (user) {
    return path;
  } else {
    return <Navigate to="/login" />;
  }
}
