import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavbarCollapse } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

class OurNav extends React.Component {
  onClick = (id) => {
    document.querySelector(`#${id}`).scrollIntoView();
  };
  render() {
    return (
      <Navbar
        expand="lg"
        className="bg-body-tertiary navbar navbar--fixed-top px-0"
      >
        <Container fluid>
          <Link to="/project1-bootcamp" className="navbar-brand">
            intimatesuppers
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav>
              <Link
                to="/project1-bootcamp#about"
                className="nav-link"
                onClick={() => this.onClick("about")}
              >
                About Us
              </Link>

              <NavDropdown title="Menus" id="basic-nav-dropdown">
                <Link
                  to="/project1-bootcamp#curr-menu"
                  className="dropdown-item"
                  onClick={() => this.onClick("curr-menu")}
                >
                  Current Menu
                </Link>
                <Link
                  to="/project1-bootcamp/past-menus"
                  className="dropdown-item"
                >
                  Past Menus
                </Link>
              </NavDropdown>

              <Link
                to="/project1-bootcamp#faq"
                className="nav-link"
                onClick={() => this.onClick("faq")}
              >
                FAQ
              </Link>
              <Link
                to="/project1-bootcamp#contact"
                className="nav-link"
                onClick={() => this.onClick("contact")}
              >
                Follow Us
              </Link>

              <Link to="/project1-bootcamp/book" className="btn">
                Book Now!
              </Link>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    );
  }
}

export default OurNav;
