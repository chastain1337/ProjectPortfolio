import React from "react";
import { Col, Image, Row, Container} from "react-bootstrap";
import ProjectColumn1 from "./ProjectColumn1"
import ProjectHeader from "./ProjectHeader";

function Project(props) {
  const leftLayout = <Row><ProjectColumn1 data={props.projectObj.column1Data}/><ProjectHeader right={props.right} projectObj={props.projectObj}/></Row>
  const rightLayout = <Row><ProjectHeader right={props.right} projectObj={props.projectObj}/><ProjectColumn1 data={props.projectObj.column1Data}/></Row>
  
  return (
    <Container fluid style={{padding: "0% 5%"}}>
      {props.right ? rightLayout : leftLayout}
    <hr/>
    </Container>
  );
}
export default Project;
