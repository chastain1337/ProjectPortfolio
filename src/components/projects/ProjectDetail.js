import React from "react";
import { Row, Col } from "react-bootstrap";

function ProjectDetail(props) {
  return (
    <Row>
      <Col md={11} sm={10}>
        <h5 className="font-weight-bold mb-1">{props.detail.detailHeader}</h5>
        <p className="text-muted">{props.detail.detailBody}</p>
      </Col>
    </Row>
  );
}

export default ProjectDetail;
