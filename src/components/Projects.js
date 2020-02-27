import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
  const [lastUpdate, setLastUpdate] = useState();

  useEffect(() => {
    getGitLastUpdate();
  });

  function getGitLastUpdate() {
    fetch(
      "https://api.github.com/repos/chastain1337/ProjectPortfolio/commits/gh-pages"
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        setLastUpdate(data.commit.committer.date.split("T")[0]);
      });
  }

  return (
    <div className="text-center">
      Projects coming soon. Last update {lastUpdate}.
      {/*<Container>
      <Row className="text-center border">
        <Col sm>Column 1</Col>
        <Col sm>Column 2</Col>
        <Col sm>Column 3</Col>
      </Row>
    </Container>*/}
    </div>
  );
}

export default Projects;
