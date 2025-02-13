import React, { useState } from "react";
import experience from "./Data/experience.json";
import LazyLoad from "react-lazy-load";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="container exp" id="experience">
        <h1> Experience</h1>
        {experience.map((data, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={data.id}
              className="exp-items text-center my-5"
              data-aos="zoom-in"
              data-aos-duration="1000"
              onClick={() => handleToggle(index)}
            >
              <div className="left">
                <LazyLoad height={200} offset={100}>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/${data.imgSrc}`}
                    alt="Profile"
                    className="logo"
                  />
                </LazyLoad>
              </div>
              <div className="right">
                <h2>
                  {" "}
                  {data.role} {"- "}
                  {data.organisation} {data.client}
                </h2>

                <h4 className="job-details">
                  <span style={{ color: "yellowgreen" }}>
                    {data.startDate} {" - "}
                    {data.endDate}{" "}
                  </span>{" "}
                  <span style={{ color: "yellow" }}> {data.location} </span>
                </h4>
                {!isActive && (
                  <p className="roles-responsibilities">
                    Click here for Roles and Responsibilities
                  </p>
                )}
                {isActive && data.responsibilities.length > 0 && (
                  <ul style={{ color: "white" }}>
                    {data.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp.description}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
