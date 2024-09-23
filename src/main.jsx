import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import "./constants/i18n"

// Layout bileşeni: Navbar her sayfada render edilecek
const Layout = () => (
  <div>
    <Navbar />
    <Outlet /> {/* Route'dan gelen içerik burada görüntülenir */}
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout kullanarak Navbar'ı her zaman göstereceğiz
    children: [
      {
        path: "/",
        element: <Homepage />, // Homepage içeriği
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
