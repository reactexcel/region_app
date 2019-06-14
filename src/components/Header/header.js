import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" className="justify-content-between">
        <Navbar.Brand href="#home">Application Logo</Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link href="#home">Application Name</Nav.Link>
        </Nav>
        <Nav className="mr-0">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">
            <Link to="/">Logout</Link>
          </Nav.Link>
          <Nav.Link href="#pricing">Contact Us</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
}
