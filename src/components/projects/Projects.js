import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Project from "./Project";

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
    <>
      {/*Projects coming soon.{" "}
      <div>{lastUpdate ? `Last update ${lastUpdate}` : null}.</div>*/}
      <Project />
    </>
  );
}

export default Projects;
