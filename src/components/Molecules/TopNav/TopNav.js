import { useState } from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 1023 ? true : false);

  return (
    <div className="text-white top-0 absolute z-50 w-full flex flex-wrap items-center px-2 py-3 navbar-expand-lg">
      <div className="w-full px-4">
        <nav className="relative flex flex-wrap items-center py-3 navbar-expand-lg rounded">
          <div className="container px-2 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between px-4 lg:static lg:flex ">
              <Link
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase "
                to="/"
              >
                GregSoares.com
              </Link>

              <div className=" inline-block">
                <div className="container mx-8">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer text-xl leading-none px-3 py-3 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                  >
                    <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                    <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                    <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                  </button>
                </div>
                {isOpen && (
                  <div
                    className="flex lg:flex-grow items-center"
                    id="example-navbar-info"
                  >
                    <ul className="flex flex-col lg:flex-row list-none ml-auto">
                      <li className="nav-item">
                        <Link
                          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                          to="/home"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                          to="/components"
                        >
                          Discover
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                          to="/about"
                        >
                          About
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default TopNav;
