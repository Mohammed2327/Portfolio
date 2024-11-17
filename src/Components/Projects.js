import React, { useState } from "react";
import project from "./Data/project.json";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const handleCardClick = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <>
      <div className="container projects my-3" id="project">
        <h1  className="title">Projects</h1>
        <div className="row d-flex justify-content-center align-items-stretch">
          {project.map((data) => (
            <div
              key={data.id}
              className="my-4 col-sm-6 col-md-4 col-lg-3 mx-5"
              onClick={() => handleCardClick(data.id)}
            >
              <div
                className="card bg-dark text-light"
                style={{
                  margin: "10px",
                  width: "350px",
                  border: "1px solid yellow",
                  boxShadow: "5px 5px 10px rgba(101, 175, 10, 0.5)",
                }}
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div className="card-body text-center">
                  <h5 className="card-title">{data.client}</h5>
                  {activeProject === data.id ? (
                    <>
                      <h6 style={{ fontSize: "20px", color: "gold" }}>Responsibilities:</h6>
                      <ul style={{ color: "white", textAlign: "left", paddingLeft: "20px" }}>
                        {data.responsibilities.map((responsibility, index) => (
                          <li key={index} style={{ paddingLeft: "20px" }}>{responsibility.description}</li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <>
                      <div style={{ textAlign: "left", color: "white", padding: "20px" }}>
                        <p><strong>Role:</strong> {data.role}</p>
                        <p><strong>Organisation:</strong> {data.organisation}</p>
                        <p><strong>Location:</strong> {data.location}</p>
                        <p style={{ color: "gold", cursor: "pointer" }}>
                          Roles and Responsibilities
                        </p>
                      </div>
                      <div className="d-flex justify-content-center">
                        <a href={data.websiteLink} className="btn btn-warning mx-2"> Website </a>
                        <a href={data.sourceCodeLink} className="btn btn-warning mx-2"> Source Code </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;