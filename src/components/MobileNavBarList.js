import { useNavigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useAuth } from "../contexts/AuthContext";
import React, { useState, useEffect } from "react";

export default function MobileNavBarList() {
  const navigate = useNavigate();
  const [user, setUser] = useState("Login");
  const { currentUser, logout } = useAuth();

  useEffect(() => {
    if (currentUser) {
      console.log("User is logged in");
      setUser(`Logout of ${currentUser.email}`);
    }
  }, [currentUser]);

  function handleLogin() {
    if (user.match(`Logout`)) {
      logout();
      setUser("Login");
    }
    navigate("/login");
  }
  return (
    <div className="flex md:hidden space-x-4 items-center justify-center px-2">
      <Link to="/#home" className="py-2 hover:text-blue-900" id="homePage">
        Home
      </Link>
      <Link
        to="/#services"
        className="py-2 hover:text-blue-900"
        id="servicesPage"
      >
        Services
      </Link>
      <Link to="/#about" className="py-2 hover:text-blue-900" id="aboutPage">
        About
      </Link>
      <button
        className="bg-blue-400 rounded py-1 px-4 hover:bg-blue-600 transition duration-300"
        id="signup"
        onClick={handleLogin}
      >
        {user}
      </button>
    </div>
  );
}
