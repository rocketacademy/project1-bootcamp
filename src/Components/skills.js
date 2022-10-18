import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

class Skills extends React.Component{
  
  render(){
    const expert = 85, basics = 33, intermediate = 50, advanced = 70;
    return (
      <Container id="skills">
        <Row id="skills-row">
          <h1>Professional Skills</h1>
          <Col>
            <label>CSS</label>
            <ProgressBar now={basics} label={"test"} />
            <label>CSS</label>
            <ProgressBar now={intermediate} label={"test"} />
            <label>CSS</label>
            <ProgressBar now={advanced} label={"test"} />
            <label>CSS</label>
            <ProgressBar now={expert} label={"test"} />
          </Col>
          <Col>
            <label>CSS</label>
            <ProgressBar now={basics} label={"test"} />
            <label>CSS</label>
            <ProgressBar now={intermediate} label={"test"} />
            <label>CSS</label>
            <ProgressBar now={advanced} label={"test"} />
            <label>CSS</label>
            <ProgressBar now={expert} label={"test"} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Skills