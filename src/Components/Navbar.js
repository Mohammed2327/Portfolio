import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "../index.css";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div
        className="container nav-bar"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="right">        
          <a href="#home" className="nav-items">
            Home
          </a>
          <a href="#experience" className="nav-items">
            Experience
          </a>
          <a href="#skills" className="nav-items">
            Skills
          </a>
          <a href="#project" className="nav-items">
            Projects
          </a>
          <a href="#certificates" className="nav-items">
            Certifications
          </a>
          <a href="#contact" className="nav-items">
            Contact Me
          </a>
        </div>
      </div>
      <div className="top-arrow" onClick={scrollToTop}>
        <FaArrowCircleUp size={30} color="white" />
      </div>
    </>
  );
};

export default Navbar;
