import { Link, useResolvedPath } from "react-router-dom";
import { ShoppingBagIcon, IceCreamCone } from "lucide-react";
import ThemeSelector from "./ThemeSelector";


function Navbar({theme}) {
  const { pathname } = useResolvedPath();
  const isHomePage = pathname === "/";

  return (
    <div className="bg-base-100/80 backdrop-blur-lg border-b border-base-content/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="navbar px-4 min-h-[4rem] justify-between">
          {/* LOGO */}
          <div className="flex-1 lg:flex-none">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <div className="flex items-center gap-2">
                <IceCreamCone className="size-9 text-primary"/>
                <span
                  className="font-semibold font-mono tracking-widest text-2xl 
                    bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                >
                  SCOOP
                </span>
              </div>
            </Link>
          </div>

          {/* Middle section */}
          <div className="hidden md:flex gap-4"> {/* Hide on small screens */}
            <Link to="/mainPage" className="btn btn-ghost">MAIN</Link>
            <Link to="/contact" className="btn btn-ghost">CONTACT US</Link>
            <Link to="/menu" className="btn btn-ghost">MENU</Link>
          </div>


          {/* Right seciton */}
          <div className="flex items-center gap-4">
            <ThemeSelector/>

            {isHomePage && (

              <div className="indicator">
                <div className="p-2 rounded-full hover:bg-base-200 transition-colors">
                  <ShoppingBagIcon className="size-5" />
                  <span className="badge badge-sm badge-primary indicator-item">
                    8
                  </span>
                </div>
                </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
export default Navbar;