import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage.tsx";
import Dashboard from "./pages/Dashboard.tsx";

function App() {
  const routers = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "products", element: <Dashboard /> },
  ]);

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
