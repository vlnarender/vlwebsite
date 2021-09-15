import React, { useEffect } from "react";

const Navigation = () => {
  useEffect(() => {



    
    // define all UI variable
    const navToggler = document.querySelector(".nav-toggler");
    const navMenu = document.querySelector(".site-navbar ul");
    const navLinks = document.querySelectorAll(".site-navbar a");

    // load all event listners
    allEventListners();

    // functions of all event listners
    function allEventListners() {
      // toggler icon click event
      navToggler.addEventListener("click", togglerClick);
      // nav links click event
      navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
    }

    // togglerClick function
    function togglerClick() {
      navToggler.classList.toggle("toggler-open");
      navMenu.classList.toggle("open");
    }

    // navLinkClick function
    function navLinkClick() {
      if (navMenu.classList.contains("open")) {
        navToggler.click();
      }
    }
  });

  return (
    
    <div className="container">
    <div className="header-area">
      <div className="navbar-area">
        <nav className="site-navbar">
          <img src="../images/logo.jpg" alt="logo" />

          <ul>
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">service</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>

          <button className="nav-toggler">
            <span></span>
          </button>
        </nav>
      </div>
    </div>
    </div>
    
  
  );
};

export default Navigation;
