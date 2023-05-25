import React, { useEffect, useState } from "react";
import { MENU_LIST } from "./constants";
import { useRouter } from "next/router";

function Layout() {
  const route = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const handleHamburger = () => {
    setShowMenu(!showMenu);
  };
  // console.log(dataMenu);

  return (
    <main className="fixed top-0 left-0 right-0 z-50 bg-white">
      <nav className="max-w-7xl h-16 px-5 flex items-center justify-between z-50 mx-auto">
        <div
          onClick={() => route.push("/")}
          className="text-slate-800 text-xl font-bold cursor-pointer transition-all duration-100"
        >
          apri.
        </div>
        <ul className="hidden lg:flex gap-6">
          {MENU_LIST.map((menu, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  document.getElementById(menu.href).scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                  scroll = { scroll: false };
                }}
                className="hover:text-sky-600 cursor-pointer"
              >
                {menu.name}
              </li>
            );
          })}
        </ul>
        <div className="lg:hidden ">
          <div
            className="h-7 w-7 cursor-pointer hover:scale-105 hover:text-sky-600 active:rotate-90 transition-all duration-300"
            onClick={handleHamburger}
          >
            {showMenu ? (
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                strokeWidth={1.5}
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            ) : (
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </div>
          {showMenu ? (
            <div className="fixed w-full left-0 text-center bg-white z-50">
              <ul className="space-y-2 my-2">
                {MENU_LIST.map((menu, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => {
                        document.getElementById(menu.href).scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                        handleHamburger();
                        scroll = { scroll: false };
                      }}
                      className="hover:text-sky-600 hover:scale-105 hover:font-semibold text-sm cursor-pointer"
                    >
                      {menu.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
    </main>
  );
}

export default Layout;
