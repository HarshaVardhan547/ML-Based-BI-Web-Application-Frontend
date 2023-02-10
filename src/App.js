import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Upload from "./pages/Upload";
import DataModeling from "./pages/DataModeling";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EDA from "./pages/EDA";
import Insights from "./pages/Insights";
import Navbarsales from "./components/Navbarsales";

function App() {
  const menu = document.querySelector("#mobile-menu");
  const menuLinks = document.querySelector(".navbar__menu");
  const navLogo = document.querySelector("#navbar__logo");
  //const pathname = useLocation();

  // Show active menu when scrolling
  const highlightMenu = () => {
    const elem = document.querySelector(".highlight");
    const homeMenu = document.querySelector("#home-page");
    const servicesMenu = document.querySelector("#services-page");
    const aboutMenu = document.querySelector("#about-page");
    let scrollPos = window.scrollY;
    // console.log(scrollPos);

    // adds 'highlight' class to my menu items
    if (window.innerWidth > 960 && scrollPos < 600) {
      homeMenu.classList.add("highlight");
      servicesMenu.classList.remove("highlight");
      return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
      servicesMenu.classList.add("highlight");
      homeMenu.classList.remove("highlight");
      aboutMenu.classList.remove("highlight");
      return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
      servicesMenu.classList.remove("highlight");
      aboutMenu.classList.add("highlight");
      return;
    }

    if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
      elem.classList.remove("highlight");
    }
  };

  window.addEventListener("scroll", highlightMenu);
  window.addEventListener("click", highlightMenu);

  return (
    <>
      <Router>
        <Navbarsales />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/eda" element={<EDA />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/datamodeling" element={<DataModeling />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
