import React from "react";
import { Col, Container } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

class Skills extends React.Component{
  
  render(){
    const expert = 85, basics = 33, intermediate = 50, advanced = 70;
    return (
      <Container className="centerDiv" id="skills">
        <h1>Professional Skills</h1>
        <Col style={{ width: "100%" }}>
          <label>CSS</label>
          <ProgressBar now={basics} label={"test"} />
          <label>CSS</label>
          <ProgressBar now={intermediate} label={"test"} />
          <label>CSS</label>
          <ProgressBar now={advanced} label={"test"} />
          <label>CSS</label>
          <ProgressBar now={expert} label={"test"} />
        </Col>
        <Col style={{ width: "100%" }}>
          <label>CSS</label>
          <ProgressBar now={basics} label={"test"} />
          <label>CSS</label>
          <ProgressBar now={intermediate} label={"test"} />
          <label>CSS</label>
          <ProgressBar now={advanced} label={"test"} />
          <label>CSS</label>
          <ProgressBar now={expert} label={"test"} />
        </Col>
      </Container>
    );
  }
}

export default Skills