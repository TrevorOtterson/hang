<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React, { Component } from "react";
import "./JoinHang.css";
import { Dropdown, DropdownButton, Button, Row, Col } from "react-bootstrap";
>>>>>>> master

export default class JoinHang extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
        <h2>Join Hang</h2>
        <p>Test text</p>
=======
      <div className="wrapper">
        <div className="form-wrapper">
          <h1 className="joinTitle">Join Hang</h1>
          <Row className="hangRow">
            <Col xs={2} md={4} className="dropdown">
              {/*DropDown */}

                <DropdownButton
                  id="dropdown-basic-button"
                  title=" Hang { }"
                >
                  <Dropdown.Item>Participants: { }</Dropdown.Item>
                  <Dropdown.Item>Skill Level: { }</Dropdown.Item>
                  <Dropdown.Item>Location: { }</Dropdown.Item>
                  <Dropdown.Item>Details: { }</Dropdown.Item>
                </DropdownButton>
            </Col>
            <Col xs={2} md={4} ></Col>
            <Col xs={2} md={4} className="join">
                <Button variant="info">Join Hang</Button>{' '}
            </Col>
          </Row>
          
          
        </div>
>>>>>>> master
      </div>
    );
  }
}
