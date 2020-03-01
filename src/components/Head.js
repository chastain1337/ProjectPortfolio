import React from "react";
import { Jumbotron, DropdownButton, Dropdown, Button } from "react-bootstrap";
import { HashRouter, Route, Link } from "react-router-dom";

function Head() {
  return (
    <Jumbotron className="text-center">
      <h1>James Chastain</h1>
      <h5>JavaScript, Python, .NET</h5>
      <DropdownButton className="mt-4" title={"View Resumé"} variant="info">
        <Dropdown.Item as={Link} to="/Resume" eventKey="1">
          Online
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="2"
          href={process.env.PUBLIC_URL + "/Resume.pdf"}
          download="James Chastain Resume.pdf">
          Download
        </Dropdown.Item>
      </DropdownButton>
      <Button
        as={Link}
        to="/Projects"
        className="mt-2"
        title={"View Projects"}
        variant="info">
        View Projects
      </Button>
    </Jumbotron>
  );
}

export default Head;
