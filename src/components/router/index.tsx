import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, LoginPage } from "pages";
import { AuthGuard } from "components/authGuard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthGuard children={<HomePage />} />,
    errorElement: <div>Page Not Found!</div>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
