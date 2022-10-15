import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <Row>
          <Col>
            <h2>About me</h2>
            <p>
              Hello! I'm Chai Ee. I'm usually that chill down-to-earth guy and
              once you get to know me, you will find that I'm an extrovert who
              communicates well and builds positive relationships with people I
              work with. I am a creative and quick-thinking individual who is
              always game for a challenge. I like coding, especially frontend,
              and am passionate about designing eye-catching and secured
              websites. Fresh out of university, I'm looking for exciting
              opportunities to jumpstart my career journey in the IT and Cyber
              Security field.
            </p>
          </Col>
          <Col>
            <Row>
              <h2>Bio</h2>
              <Col>
                <div>age</div>
                <div>email</div>
                <div>phone</div>
                <div>Address</div>
              </Col>
              <Col>
                <div>25</div>
                <div>chaiee@live.com.sg</div>
                <div>+65 92972517</div>
                <div>Singapore, Singapore</div>
              </Col>
            </Row>
            <div>icons icons icons icons</div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
