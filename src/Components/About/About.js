import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../../src/logo.png"
import "./About.css"

class About extends React.Component{

  render(){
    return (
      <section>
        <Container fluid>
          <Row>Hello</Row>
          <Row style={{display: "flex"}}>
            <Col><img src={logo} className="photo" alt = "test"/></Col>
            <Col>Ready</Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default About