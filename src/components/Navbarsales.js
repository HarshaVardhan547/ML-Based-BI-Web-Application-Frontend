import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbarsales.css";
import { IconContext } from "react-icons";
import { useLocation } from "react-router-dom";

function Navbarsales() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);
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
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbarsales-toggle"></li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
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
