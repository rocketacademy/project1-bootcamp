import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../../src/logo.png"
import "./Navbar.css"


class NavMenu extends React.Component{

  render(){

    return (
      <div className="NavMenu">
        <Navbar bg="dark" sticky="top">
        </Navbar>
      </div>
    );
  }
}

export default NavMenu