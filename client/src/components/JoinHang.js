import React, { Component } from "react";
import "./JoinHang.css";
import { Dropdown, DropdownButton, Button, Row, Col } from "react-bootstrap";

export default class JoinHang extends Component {
  render() {
    return (
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
      </div>
    );
  }
}
