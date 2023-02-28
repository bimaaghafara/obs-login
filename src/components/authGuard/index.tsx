import { Navigate } from "react-router-dom";

type TAuthGuardProps = {
  children: React.ReactElement;
};

export function AuthGuard({ children }: TAuthGuardProps) {
  const userId = localStorage.getItem("userId");
  if (userId) return children;
  return <Navigate to="/login" replace />;
}
