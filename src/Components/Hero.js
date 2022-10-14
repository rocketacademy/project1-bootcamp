import React from "react";
import logo from "../../src/logo.png"
import "./Hero.css"
import picture from "../../src/hero.jpg"
import { Container } from "react-bootstrap";

class Hero extends React.Component{

  render(){
    return (
      <Container className="container" fluid>
        <img src={picture} alt="" />
        <p className="test">
          <code>
            <h4 style={{ marginBottom: "40px", marginTop: "0px" }}>
              Hello World!
            </h4>
          </code>
          <h3 style={{ margin: "4px" }}>My name is</h3>
          <h1 style={{ margin: "4px" }}>Loy Chai Ee</h1>
          <h3 style={{ margin: "4px" }}>An Aspiring Software Engineer</h3>
        </p>
      </Container>
    );
  }
}

export default Hero