import React from "react";
import { Col, Image, Row, Container} from "react-bootstrap";
import ProjectImage from "./ProjectImage"
import ProjectHeader from "./ProjectHeader";

function Project(props) {
  const leftLayout = <Row><ProjectImage /><ProjectHeader right={props.right} projectObj={props.projectObj}/></Row>
  const rightLayout = <Row><ProjectHeader right={props.right} projectObj={props.projectObj}/><ProjectImage /></Row>
  
  return (
    <Container fluid style={{padding: "0% 5%"}}>
      {props.right ? rightLayout : leftLayout}
    <hr/>
    </Container>
  );
}
export default Project;
