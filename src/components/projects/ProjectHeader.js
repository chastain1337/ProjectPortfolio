import React from "react"
import {Col}  from "react-bootstrap"
import ProjectDetail from "./ProjectDetail"

function ProjectHeader(props) {
    const projectDetailComponents = props.projectObj.projectDetails.map (detail => <ProjectDetail detail={detail}/>)
    return (
        <Col lg={7} >
        <h2 className="h1-responsive">{props.projectObj.name}</h2>
        <div className="mb-4 text-black-50">
          <b>{props.projectObj.languages}</b>
          {" : "}
          {props.projectObj.frameworks}
        </div>
        {projectDetailComponents}
      </Col>
    )
}

export default ProjectHeader