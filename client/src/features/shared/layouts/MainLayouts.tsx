import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  const location = useLocation();

  // Add all routes where you want to HIDE the layout components (Navbar, Footer, etc.)
  const hiddenRoutes = ["/login", "/register", "/auth"];
  const isHidden = hiddenRoutes.some((path) => location.pathname.startsWith(path));

  return (
    <>
      {!isHidden && <Navbar />}

      <main className="min-h-screen">
        <Outlet />
      </main>

      {!isHidden && <Footer />}
    </>
  );
}