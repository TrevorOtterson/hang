import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class navbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} Component class={Link} to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} Component class={Link} to="/messages">
              Messages
            </NavItem>
            <NavItem eventKey={3} Component class={Link} to="/userProfile">
              Profile
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}