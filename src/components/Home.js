import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";

export default class home extends Component {
  render() {
    return (
      <div>
        <h2>Welcom to Hang</h2>
        <p>Test text</p>
        <Link to="/createHang">
          <Button bsStyle="primary">Create Hang</Button>
        </Link>
        <Link to="/joinHang">
          <Button bsStyle="secondary">Join Hang</Button>
        </Link>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper"></Col>
        </Row>
      </div>
    );
  }
}
