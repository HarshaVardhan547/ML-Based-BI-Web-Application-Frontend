import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import React, { useState, useEffect } from "react";

export default function Navigationbar() {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [user, setUser] = useState("Login");
  const { currentUser, logout } = useAuth();

  useEffect(() => {
    if (currentUser) {
      console.log("User is logged in");
      setUser(`Logout of ${currentUser.email}`);
    }
  }, [currentUser]);

  function handleClick() {
    navigate("/");
  }

  function handleLogin() {
    if (user.match(`Logout`)) {
      logout();
      setUser("Login");
    }
    navigate("/login");
  }

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="#home" id="navbar__logo">
          <img src="assets/Logo.png" width="250px" height="70px" />
        </a>
        <div className="navbar__toggle" id="mobile-menu">
          <span className="bar"></span> <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a className="navbar__links" id="home-page" onClick={handleClick}>
              Home
            </a>
          </li>
          <li className="navbar__item">
            <a
              href="#services"
              className="navbar__links"
              id="services-page"
              onClick={handleClick}
            >
              Services
            </a>
          </li>
          <li className="navbar__item">
            <a
              href="#about"
              className="navbar__links"
              id="about-page"
              onClick={handleClick}
            >
              About
            </a>
          </li>
          <li className="navbar__btn">
            <a className="button" id="signup" onClick={handleLogin}>
              {user}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
