import React, { useEffect, useRef } from "react";
import Resume from "../Resume/MOHAMMED MUJEEBUDDIN.pdf";
import profile from "./Data/profile.json";
import Typed from "typed.js";
import LazyLoad from 'react-lazy-load';


const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my Portfolio", 
        "I'm Mohammed Mujeebuddin", 
        "I'm Frontend Developer (ReactJS)",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left"
        data-aos= "fade-up-right"
    data-aos-duration="1000"
        >
          <h1 ref={typedRef}> </h1>
          <a
            href={Resume}
            download="MOHAMMED-MUJEEBUDDIN.pdf"
            className="btn btn-outline-warning my-3"
          >
          Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img"
          data-aos= "fade-up-left"
          data-aos-duration="1000">
            
            <LazyLoad height={-70} offset={100}>
            <img src={`${process.env.PUBLIC_URL}/assets/${profile.imgSrc}`}
            alt="Profile" />
            </LazyLoad>

          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
