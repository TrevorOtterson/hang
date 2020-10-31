import React, { Component } from 'react';
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
                {/* <Dropdown.Item>participants: {hang.participants}: {}</Dropdown.Item>
                <Dropdown.Item>event: {hang.event} {}</Dropdown.Item>
                <Dropdown.Item>skill: {hang.skill} {}</Dropdown.Item>
                <Dropdown.Item>location: {hang.location} {}</Dropdown.Item>
                <Dropdown.Item>detail: {hang.details} {}</Dropdown.Item> */}
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
  };
}
