import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "../../../utils/cn";
import SearchBar from "../../home/components/SearchBar";

interface NavbarProps {
    showStickySearch?: boolean;
    searchValues?: string;
    setSearchValue?: (value: string) => void;
}

export default function Navbar({ showStickySearch, searchValues, setSearchValue }: NavbarProps) {
    const { pathname } = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const hideNavbar =
        pathname.startsWith("/auth") || pathname.startsWith("/register");

    if (hideNavbar) return null;

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full px-6 z-50 transition-all duration-300",
                showStickySearch ? "py-2" : "py-4",
                scrolled
                    ? "backdrop-blur-md bg-zinc-200/15 shadow-sm"
                    : "bg-transparent border-transparent"
            )}
        >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                <a href="/" className="text-black">
                    <span className="inline-flex items-center justify-center gap-0 whitespace-nowrap text-xl font-bold group cursor-pointer">
                        timetra
                        <img
                            src="/logo.png"
                            alt="X"
                            className="h-[1.6em] w-auto object-contain inline-block -ml-[6px] transition-transform group-hover:scale-120 group-hover:drop-shadow-md"
                        />
                    </span>
                </a>
                {showStickySearch && setSearchValue && searchValues !== undefined && (
                    <div className="w-full lg:w-auto">
                        <SearchBar size="navCompact" values={searchValues} onChange={setSearchValue} />
                    </div>
                )}
                <div className="flex items-center gap-3">
                    <Link
                        to="/login"
                        className="text-sm font-medium text-orange-700 hover:text-orange-900 transition-colors"
                    >
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="px-4 py-2 rounded-md text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 shadow-sm transition-colors"
                    >
                        Sign up
                    </Link>
                </div>
            </div>
        </nav>
    );
}