import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, LoginPage } from "pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
