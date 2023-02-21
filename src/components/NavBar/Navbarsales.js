import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import { useLocation } from "react-router-dom";

function Navbarsales() {
  const { pathname } = useLocation();
  if (
    pathname === "/" ||
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/forgot-password"
  )
    return null;
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav
          className={
            "lg:block fixed z-20 inset-0 top-[3.8125rem] right-auto w-48 pb-10 px-8 overflow-y-auto bg-gray-100 left-0"
          }
        >
          <ul className="text-color-black mt-4">
            <li className="text-sky-500 hover:text-blue-600"></li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className={
                      "group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-sky-500 hover:text-blue-600"
                    }
                    to={item.path}
                  >
                    <span className=""> {item.icon} </span>
                    <span className="ml-2">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbarsales;
