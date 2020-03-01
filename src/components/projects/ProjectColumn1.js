import React from "react";
import { Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProjectColumn1(props) {
  return (
    <Col lg={5} mb-lg={0}>
      <Image fluid className="z-depth-5 rounded-lg" src={props.data.imageUrl} />
      <Button
        size="sm"
        className="mt-1 mr-2"
        href={props.data.sourceUrl}
        target="_blank"
        variant="dark">
        View Source Code
      </Button>
      {props.data.liveDemoUrl ? (
        <Button
          as={Link}
          to={props.data.liveDemoUrl}
          size="sm"
          className="mt-1 mr-2"
          variant="success">
          Live Demo
        </Button>
      ) : null}
      {props.data.downloadExeUrl ? (
        <Button
          size="sm"
          href={props.data.downloadExeUrl}
          className="mt-1 mr-2"
          variant="info">
          Download Portable
        </Button>
      ) : null}
    </Col>
  );
}

export default ProjectColumn1;
