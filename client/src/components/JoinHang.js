import React, { Component } from 'react';
import { Dropdown, DropdownButton, Button, Row, Col } from "react-bootstrap";
import api from "../utils/API"
import axios from "axios"
export default class JoinHang extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {


    let hang
    axios.get("api/hang").then((response) => {
      hang = response
      console.log(hang)
      this.setState(response)

    })
    return (
      <div className="wrapper" >
        <div className="form-wrapper">
          <h1 className="joinTitle">Join Hang</h1>
          <Row className="hangRow">
            <Col xs={2} md={4} className="dropdown">
              {/*DropDown */}

              <DropdownButton
                id="dropdown-basic-button"
                title=" Hang { }">
                {/* {this.state.hang.data.map(() => {
                  console.log(data)
                }
                )} */}


              </DropdownButton>
            </Col>
            <Col xs={2} md={4} ></Col>
            <Col xs={2} md={4} className="join">
              <Button variant="info">Join Hang</Button>{' '}
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
  };
}
