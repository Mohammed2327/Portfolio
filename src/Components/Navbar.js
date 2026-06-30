import React, { useCallback } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "../index.css";

const Navbar = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "project", label: "Projects" },
    { id: "certificates", label: "Certifications" },
    { id: "contact", label: "Contact Me" },
  ];

  return (
    <>
      <div className="container nav-bar">
        <div className="right">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="nav-items">
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="top-arrow" onClick={scrollToTop}>
        <FaArrowCircleUp size={30} color="white" />
      </div>
    </>
  );
};

export default Navbar;