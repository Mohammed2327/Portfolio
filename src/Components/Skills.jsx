import React from "react";
import skills from "./Data/skills.json";
import LazyLoad from 'react-lazy-load';

const Skills = () => {
  return (
    <>
    
    <div className="container skills" id="skills">
        <h1>Skills</h1>
        <div className="items">
          {skills.map((skill) => (
            
              <div
                className="item"
                key={skill.id}
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                
                <LazyLoad height={100} offset={100}>
                <img src={`/assets/${skill.imageSrc}`}
                 alt="Skills" />
                 </LazyLoad>
                <h3>{skill.title}</h3>
              </div>
           
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
