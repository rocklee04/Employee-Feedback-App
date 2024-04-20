import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/login.css";

function LoginForm() {
  const navigate = useNavigate();
  const [loginInputEmail, setLoginInputEmail] = useState("");
  const [loginInputPassword, setLoginInputPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: loginInputEmail,
      password: loginInputPassword,
    };

    axios
      .post("https://employee-feedback-api.onrender.com/user/login", data)
      .then((response) => {
        setResponseMessage(response.data.message);
        localStorage.setItem("token", response.data.token);
        alert("Login successful");
        navigate("/reviewList");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Login failed");
        setResponseMessage("An error occurred while submitting the form.");
      });
  };

  const handleAdminLogin = async () => {
    const adminData = {
      email: "admin@example.com",
      password: "adminpassword",
    };

    axios
      .post("https://employee-feedback-api.onrender.com/user/adminLogin", adminData)
      .then((response) => {
        setResponseMessage(response.data.message);
        localStorage.setItem("token", response.data.token);
        alert("Admin login successful");
        navigate("/admin-dashboard");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Admin login failed");
        setResponseMessage("An error occurred while submitting the form.");
      });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleLoginFormSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="loginInputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="loginInputEmail"
            placeholder="Email address"
            value={loginInputEmail}
            onChange={(e) => setLoginInputEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="loginInputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="loginInputPassword"
            placeholder="Password"
            value={loginInputPassword}
            onChange={(e) => setLoginInputPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Log in
        </button>
        <button type="button" className="btn btn-primary" onClick={handleAdminLogin}>
          Login as Admin
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
