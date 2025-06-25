import React, { useState } from "react";
import experience from "./Data/experience.json";
import LazyLoad from "react-lazy-load";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container exp" id="experience">
      <h1 style={{ textAlign: "center", marginBottom: "30px", color: "gold" }}>
        Experience
      </h1>
      {experience.map((data, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={data.id}
            className="exp-items"
            data-aos="zoom-in"
            data-aos-duration="1000"
            onClick={() => handleToggle(index)}
          >
            {/* Left - Logo */}
            <div className="left">
              <LazyLoad height={100} offset={100}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/${data.imgSrc}`}
                  alt={`${data.organisation} Logo`}
                  className="logo"
                />
              </LazyLoad>
            </div>

            {/* Right - Role, Org, Date, Location, Responsibilities */}
            <div className="right" style={{ flex: 1, paddingLeft: "40px", marginLeft: "20px" }}>
              <h2 style={{ marginBottom: "10px", color: "white" }}>
                {data.role} - {data.organisation}
                {data.client && (
                  <span style={{ fontSize: "0.9rem", color: "#ccc" }}>
                    {" "}
                    ({data.client})
                  </span>
                )}
              </h2>

              <h4 className="job-details">
                <span style={{ color: "yellowgreen", fontWeight: 600 }}>
                  {data.startDate} - {data.endDate}
                </span>{" "}
                | <span style={{ color: "yellow" }}>{data.location}</span>
              </h4>

              {!isActive ? (
                <p className="roles-responsibilities">
                  Click here for Roles and Responsibilities
                </p>
              ) : (
                <ul>
                  {data.responsibilities.map((item, i) => (
                    <li key={i}>{item.description}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
