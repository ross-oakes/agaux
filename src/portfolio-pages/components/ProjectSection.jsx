import * as React from "react"

const ProjectSection = (props) => (
    <div className="project-section">
        <h1>{props.title}</h1>
        {props.children}
    </div>
);

export default ProjectSection;