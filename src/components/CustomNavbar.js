import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default class CustomNavbar extends Component {
  render() {
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href='/' to='/'>HANG</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/" to="/">Home</Nav.Link>
      <Nav.Link href="/messages" to="/messages">Messages</Nav.Link>
      <Nav.Link href="/userProfile" to="/userProfile">Profile</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}
