import React, { Component } from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import "./UserProfile.css";

export default class UserProfile extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={10} md={10} className="wrapper">
            <Row>
              <h2 className="profileHeader">Profile</h2>
            </Row>
            <Row className="profile">
              <Col xs={0} md={1}></Col>
              <Col xs={6} md={4} className="profilePic">
                <Image src="../public/300.png" rounded />
              </Col>
              <Col xs={0} md={2}></Col>
              <Col xs={6} md={4} className="userInfo">
                <h3 className="userName">Username</h3>
                <p className="userDetail">Age</p>
                <p className="userDetail">Gender</p>
                <p className="userDetail">Age</p>
              </Col>
              <Col xs={0} md={1}></Col>
            </Row>
            <Row className="bio">
              <h3 className="bioHeader">Bio</h3>
              <p className="bioBody">Bio</p>
            </Row>
            <Row className="current">
              <Col>
                <Row>
                  <h3 className="currentHeader">Current Activities</h3>
                </Row>
                <Row>
                  <Col>
                    <ul className="actList">
                      <li>
                        <Card className="listItem">
                          <h4 className="hangName">Name</h4>
                          <p className="hangDetail">Details</p>
                        </Card>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="past">
              <Col>
                <Row>
                  <h3 className="pastHeader">Past Activities</h3>
                </Row>
                <Row>
                  <Col>
                    <ul className="actList">
                      <li>
                        <Card className="listItem">
                          <h4 className="hangName">Name</h4>
                          <p className="hangDetail">Details</p>
                        </Card>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
