import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../test-logo.png"
import { useState } from "react";

function Menu() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      bg="dark"
      variant={"dark"}
      expand="lg"
      className="fixed-top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} height="50px" width="50px" alt="test" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#about"
              onClick={() => setExpanded(expanded ? false : "expanded")}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              href="#education"
              onClick={() => setExpanded(expanded ? false : "expanded")}
            >
              Education
            </Nav.Link>
            <Nav.Link
              href="#skills"
              onClick={() => setExpanded(expanded ? false : "expanded")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#project"
              onClick={() => setExpanded(expanded ? false : "expanded")}
            >
              Project
            </Nav.Link>
            <Nav.Link
              href="#work"
              onClick={() => setExpanded(expanded ? false : "expanded")}
            >
              Work Experince
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={() => setExpanded(expanded ? false : "expanded")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;