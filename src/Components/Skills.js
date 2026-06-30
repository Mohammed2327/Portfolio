import React from "react";
import skills from "./Data/skills.json";

const Skills = () => {
  return (
    <div className="container skills" id="skills">
      <h1>Skills</h1>

      <div className="items">
        {skills.map((skill) => (
          <div className="item" key={skill.id}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/${skill.imageSrc}`}
              alt={skill.title}
              loading="lazy"
            />
            <h3>{skill.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;