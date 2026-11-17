import { createBrowserRouter, RouterProvider, ScrollRestoration, Outlet } from "react-router";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Featured from "./pages/Featured.jsx";
import Layout from "./components/Layout";

function Root() {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        element: <Layout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/featured", element: <Featured /> },
        ],
      },
      { path: "/:author/:slug", element: <Article /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;