// Navbar.js
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "../styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [token, setToken] = useState(""); // Initialize token state with an empty string

  const logoutToken = () => {
    localStorage.removeItem("token");
    alert("Logout Successful");
    navigate("/login");
    window.location.reload();
  };

  useEffect(() => {
    // Fetch the token from local storage during component mount
    const token1 = localStorage.getItem("token");
    setToken(token1); // Update the token state
  }, []); // The empty dependency array ensures this effect runs only once during component mount

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" width="50" height="50" /> 
        </Link>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            {!token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={logoutToken}>
                  Logout
                </button>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/reviewList">
                Review List
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
