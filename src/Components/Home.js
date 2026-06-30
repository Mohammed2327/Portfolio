import React, { useEffect, useRef, useMemo } from "react";
import Resume from "../Resume/MOHAMMED MUJEEBUDDIN.pdf";
import profile from "./Data/profile.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);

  const typedStrings = useMemo(() => [
    "Welcome to my Portfolio",
    "I'm Mohammed Mujeebuddin",
    "A Software Engineer II",
  ], []);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: typedStrings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    });

    return () => typed.destroy();
  }, [typedStrings]);

  return (
    <div className="container home" id="home">
      
      <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
        <h1 ref={typedRef}></h1>

        <a
          href={Resume}
          download="MOHAMMED-MUJEEBUDDIN.pdf"
          className="btn btn-outline-warning my-3"
        >
          Download Resume
        </a>
      </div>

      <div className="right">
        <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
          <img
            src={`${process.env.PUBLIC_URL}/assets/${profile.imgSrc}`}
            alt="Profile"
            loading="lazy"
          />
        </div>
      </div>

    </div>
  );
};

export default Home;