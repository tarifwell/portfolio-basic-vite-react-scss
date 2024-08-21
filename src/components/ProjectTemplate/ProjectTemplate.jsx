import Tag from '../Tag/Tag';
import './ProjectTemplate.scss';

const ProjectTemplate = ({ projectName, projectDesc, tags, img }) => {
  return (
    <div className="project">
        <div className="project-details">
          <h2 className="project-name">{projectName}</h2>
          <span className="project-desc">{projectDesc}</span>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor libero et neque malesuada, eu tristique urna tincidunt. Nullam vel velit dui. Nulla facilisi.</p> */}

          <div className="tags">
            <h2 className="tech-stack">Techlologies used:</h2>
            <div className="tags-wrapper">
              { tags.map( (tag, index) => {
                return (
                    <Tag title={tag} key={index} />
                );
              })}
            </div>
          </div>

          {/* <div className="project-links">
                    <a href="#">Live Demo</a>
                    <a href="#">Source Code</a>
                </div> */}
        </div>

        <div className="project-image">
          <img src={img} alt="Project Image" />
        </div>
      </div>
  )
}

export default ProjectTemplate