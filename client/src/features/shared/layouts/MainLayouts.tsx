import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSearch } from "../ contexts/SearchContext";

export default function MainLayout() {
  const location = useLocation();
  const hiddenRoutes = ["/login", "/register", "/auth"];
  const isHidden = hiddenRoutes.some((path) => location.pathname.startsWith(path));

  const { showStickySearch, searchValues, setSearchValue } = useSearch();

  return (
    <>
      {!isHidden && <Navbar showStickySearch={showStickySearch} searchValues={searchValues} setSearchValue={setSearchValue} />}

      <main className="min-h-screen pt-[120px]">
        <Outlet />
      </main>

      {!isHidden && <Footer />}
    </>
  );
}