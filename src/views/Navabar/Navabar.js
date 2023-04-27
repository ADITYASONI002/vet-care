import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "./images/Vetcare-removebg-preview.png";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <nav class="navbar navbar-expand-lg bg">
        <div class="container-fluid">
          <div className="logoCont">
            <img src={logo} className="navbar-brand" alt="..."></img>
            <p id="logoName">
              {" "}
              <span id="vetcare"> Vetcare </span>
              <br></br>One Stop Solution
            </p>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav">
            <li class="nav-item">
              <p
                class="navLink "
                aria-current="page"
                onClick={() => navigate("/home")}
              >
                Home
              </p>
            </li>
            <li class="nav-item">
              <p
                class="navLink "
                aria-current="page"
                onClick={() => navigate("/about")}
              >
                About
              </p>
            </li>
            <li class="nav-item">
              <p
                class="navLink "
                aria-current="page"
                onClick={() => navigate("/services")}
              >
                Services
              </p>
            </li>
            <li class="nav-item">
              <p
                class="navLink "
                aria-current="page"
                onClick={() => navigate("/socialMedia")}
              >
                Social Media
              </p>
            </li>
            <li class="nav-item">
              <p
                class="navLink "
                aria-current="page"
                onClick={() => navigate("/contact")}
              >
                Contact us
              </p>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
