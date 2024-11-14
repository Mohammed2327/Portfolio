import React from "react";
import experience from "./Data/experience.json";
import LazyLoad from 'react-lazy-load';

const Experience = () => {
  return (
    <>
      <div className="container exp" id="experience">
        <h1> Experience</h1>
        {experience.map((data) => {
          return (
            
              <div key={data.id} className="exp-items text-center my-5"
              data-aos= "zoom-in"
              data-aos-duration="1000"
              >
                <div className="left">
                  <LazyLoad height={200} offset={100}>
                  <img src={`/assets/${data.imgSrc}`} alt="Profile" className="logo" />
                  </LazyLoad>
                 
                </div>
                <div className="right">
                  <h2> {data.role} {"-"} {data.organisation}</h2>
                  <h4>
                    {" "}
                    <span style={{ color: "yellowgreen" }}>
                      {data.startDate} {" -"}
                      {data.endDate}{" "}
                    </span>{" "}
                    <span style={{color:'yellow'}}> {data.location} </span>
                  </h4>
                  <h5 style={{color:'yellow'}}> {data.experiences[0]} </h5>
                  <h5 style={{color:'yellow'}}> {data.experiences[1]} </h5>
                </div>
              </div>
            
          );
        })}
      </div>
    </>
  );
}

export default Experience;
