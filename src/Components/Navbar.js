import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logos/logo.png"; 
import { useState } from "react";

function Menu() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      variant={"dark"}
      expand="lg"
      className="fixed-top"
      expanded={expanded}
      style={{
        fontFamily: "Share Tech Mono",
      }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="test" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{ gap: "16px" }}>
            <Nav.Link
              href="#about"
              onClick={() => setExpanded(expanded ? false : "expanded")}
              style={{
                color: "#20C20E",
                fontSize: "max(1vw, 20px)",
                fontWeight: "bold",
              }}
            >
              1.About Me
            </Nav.Link>
            <Nav.Link
              href="#education"
              onClick={() => setExpanded(expanded ? false : "expanded")}
              style={{
                color: "#20C20E",
                fontSize: "max(1vw, 20px)",
                fontWeight: "bold",
              }}
              data-transition="none"
            >
              2.Education
            </Nav.Link>
            <Nav.Link
              href="#skills"
              onClick={() => setExpanded(expanded ? false : "expanded")}
              style={{
                color: "#20C20E",
                fontSize: "max(1vw, 20px)",
                fontWeight: "bold",
              }}
            >
              3.Skills
            </Nav.Link>
            <Nav.Link
              href="#work"
              onClick={() => setExpanded(expanded ? false : "expanded")}
              style={{
                color: "#20C20E",
                fontSize: "max(1vw, 20px)",
                fontWeight: "bold",
              }}
            >
              4.Work Expereince
            </Nav.Link>
            <Nav.Link
              href="#project"
              onClick={() => setExpanded(expanded ? false : "expanded")}
              style={{
                color: "#20C20E",
                fontSize: "max(1vw, 20px)",
                fontWeight: "bold",
              }}
            >
              5.Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={() => setExpanded(expanded ? false : "expanded")}
              style={{
                color: "#20C20E",
                fontSize: "max(1vw, 20px)",
                fontWeight: "bold",
              }}
            >
              6.Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
