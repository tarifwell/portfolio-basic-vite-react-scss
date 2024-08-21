import { useState } from "react";
import ProjectTemplate from "../../components/ProjectTemplate/ProjectTemplate";
import "./Projects.scss";
import proj_1 from "../../assets/proj_1.png";
import proj_2 from "../../assets/proj_2.png";
import proj_3 from "../../assets/proj_3.png";
import proj_4 from "../../assets/proj_4.png";
import proj_5 from "../../assets/proj_5.png";

const Projects = () => {
    const [tags] = useState(["React", "CSS/SCSS", "Node.js", "Express", "More..."]);

  return (
    <div className="projects-wrapper">
        <div></div>
        <ProjectTemplate 
            projectName="Web Application 1" 
            projectDesc="Project description..." 
            tags={tags}
            img={proj_1}
        />

        <ProjectTemplate 
            projectName="Web Application 2" 
            projectDesc="Project description..." 
            tags={tags}
            img={proj_2}
        />

        <ProjectTemplate
            projectName="Web Application 3" 
            projectDesc="Project description..." 
            tags={tags}
            img={proj_3}
        />

        <ProjectTemplate
            projectName="Web Application 4" 
            projectDesc="Project description..." 
            tags={tags}
            img={proj_4}
        />

        <ProjectTemplate
            projectName="Web Application 4" 
            projectDesc="Project description..." 
            tags={tags}
            img={proj_5}
        />
        <div></div>
    </div>
    
  );
};

export default Projects;
