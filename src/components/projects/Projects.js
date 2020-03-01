import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Project from "./Project";
import projects from "./projectsObj";

function Projects() {
  const projectsComponents = projects.map((project, index) => {
    let right = null;
    index % 2 == 0 ? (right = false) : (right = true);
    return <Project key={project.name} projectObj={project} right={right} />;
  });

  return <>{projectsComponents}</>;
}

export default Projects;
