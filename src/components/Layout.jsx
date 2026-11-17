import { Link, Outlet, useLocation } from "react-router";
import Navbar from "./Navbar";

function Layout() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex gap-8 text-sm border-b border-neutral-200">
          <Link to="/" className={`pb-3 ${pathname === "/" ? "border-b border-black font-medium text-black" : "text-neutral-500 hover:text-black"}`}>
            For you
          </Link>
          <Link to="/featured" className={`pb-3 ${pathname === "/featured" ? "border-b border-black font-medium text-black" : "text-neutral-500 hover:text-black"}`}>
            Featured
          </Link>
        </div>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;