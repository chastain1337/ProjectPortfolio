import React from "react"
import {Row, Col} from "react-bootstrap"

function ProjectDetail() {
    return (
    <Row mb-3>
      <Col md={1} lg={2}>
        <i className="fas fa-book fa-2x cyan-text" />
      </Col>
      <Col md={11} sm={10}>
        <h5 className="font-weight-bold mb-3">Some Header</h5>
        <p>Some text</p>
      </Col>
    </Row>)
}

export default ProjectDetail