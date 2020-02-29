import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Project from "./Project";

class ProjectDetailInfo {
  constructor(header,body) {
    this.detailHeader = header;
    this.detailBody = body;
  }
}

function Projects() {
  
  const projects = [
    {
      name: "Mock Intranet",
      languages: "JavaScript",
      frameworks: "Mongoose, Express, React, Node",
      projectDetails: [
        new ProjectDetailInfo("Features","A full-scale order management system with the ability to create products and vendors, auto-calculate orders based on your parameters, apply invoices and track outstanding lines."),
        new ProjectDetailInfo("Challenges","As my first project, there was a limited knowledge of both front and back-end development early on; the scale of the project felt overwhelming at times."),
        new ProjectDetailInfo("Solutions","Good convention, a willingness to refactor and rewrite code based on new knowledge, and thorough planning including writing psuedo-code and wireframing.")
      ]
    },
    {
      name: "eBay Product Details Getter",
      languages: "Python",
      frameworks: "PyQt5, Requests, ElementTree",
      projectDetails: [
        new ProjectDetailInfo("Inspiration","Some function of this project"),
        new ProjectDetailInfo("Challenges","Some challenges of this project"),
        new ProjectDetailInfo("Solutions","Some solutions of this project")
      ]
    },
    {
      name: "Decision Maker",
      languages: "JavaScript",
      frameworks: "React",
      projectDetails: [
        new ProjectDetailInfo("Inspiration","Some function of this project"),
        new ProjectDetailInfo("Challenges","Some challenges of this project"),
        new ProjectDetailInfo("Solutions","Some solutions of this project")
      ]
    }
  ]

  const projectsComponents = projects.map ((project, index) => {
    let right = null;
    index % 2 == 0 ? right = false : right = true;
    return <Project projectObj={project} right={right} /> }
  )

  return <>{projectsComponents}</>
}

export default Projects;
