import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import whatsapp from "../whatsapp.svg"
import calender from "../calendar.svg"
import email from "../envelope.svg"
import telegram from "../telegram.svg"
import location from "../location.svg"
import linkedIn from "../linkedin.svg"
import github from "../github.svg"
import google from "../google.svg"
import facebook from "../facebook.svg"

class About extends React.Component {
  render() {
    return (
      <Container id="about">
        <Row>
          <Container>
            <Col>
              <h2>About me</h2>
              <p>
                Hello! I'm Chai Ee. I'm usually that chill down-to-earth guy and
                once you get to know me, you will find that I'm an extrovert who
                communicates well and builds positive relationships with people
                I work with. I am a creative and quick-thinking individual who
                is always game for a challenge. I like coding, especially
                frontend, and am passionate about designing eye-catching and
                secured websites. Fresh out of university, I'm looking for
                exciting opportunities to jumpstart my career journey in the IT
                and Cyber Security field.
              </p>
            </Col>
          </Container>
          <Container>
            <Col id="Bio">
              <Row>
                <h2>Bio</h2>
                <Col>
                  <div>
                    <img src={calender} alt="age" />
                    <span style={{ marginLeft: "6px" }}>age</span>
                  </div>
                  <div>
                    <img src={whatsapp} alt="whatsapp" />
                    <span style={{ marginLeft: "6px" }}>Phone</span>
                  </div>
                  <div>
                    <img src={telegram} alt="telegram" />
                    <span style={{ marginLeft: "6px" }}>Telegram hanle</span>
                  </div>
                  <div>
                    <img src={email} alt="email" />
                    <span style={{ marginLeft: "6px" }}>Email</span>
                  </div>
                  <div>
                    <img src={location} alt="location" />
                    <span style={{ marginLeft: "6px" }}>Address</span>
                  </div>
                </Col>
                <Col>
                  <div>22</div>
                  <div>+65 81786416</div>
                  <div>@def_rebirth</div>
                  <div>chaiee@live.com.sg</div>
                  <div>Singapore, Singapore</div>
                </Col>
              </Row>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <a href="https://github.com/LoyChaiEe" target="_blank" rel="noreferrer"><img src={github} style={{ padding: "6px" }} alt="github" /></a>
                <a href="https://www.linkedin.com/in/loy-chai-889711235/" target="_blank" rel="noreferrer"><img src={linkedIn} style={{ padding: "6px" }} alt="linkedIn" /></a>
                <a href="https://www.facebook.com/chaiee.loy" target="_blank" rel="noreferrer"><img src={facebook} style={{ padding: "6px" }} alt="facebook" /></a>
                <a href="google" target="_blank"><img src={google} style={{ padding: "6px" }} alt="google" /></a>
              </div>
            </Col>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default About;


<Container>
  <Row>
    <h2>Professional Skills</h2>
    <ul>
      <li>Programming Language: C, C#, Javascript, Python</li>
      <li>
        Frameworks/Libraries: React, NodeJs, npm Tensorflow, Numpy, Pandas, Matplotlib
      </li>
      <li>Tools: Github, Git, Visual Code Studio, Firebase</li>
      <li>Other: Arduino</li>
    </ul>
  </Row>
</Container>;