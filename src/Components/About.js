import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import aos from "aos";
import "aos/dist/aos.css";

import whatsapp from "../whatsapp.svg";
import calender from "../calendar.svg";
import email from "../envelope.svg";
import telegram from "../telegram.svg";
import location from "../location.svg";
import linkedIn from "../linkedin.svg";
import github from "../github.svg";
import facebook from "../facebook.svg";
import leetcode from "../leetcode.svg"

function About() {
  useEffect(() => {
    aos.init({ duration: 2000 });
  }, [])
  return (
    <Container data-aos="fade-up" id="about">
      <Row>
        <Container>
          <Col>
            <h2>About me</h2>
            <p>
              Hello! I'm Chai Ee. I enjoy tinkering around with
              electronics/software and finding out how things work. I like
              coding, especially backend, and am passionate about secured
              websites and optimizing algorithms. I always seek to look for ways
              that we can improve our products. Currently, I am an undergraduate
              at Nanyang Technological University, studying Electrical and
              Electronic Engineering. I'm looking for exciting opportunities to
              gain professional exposure in the Software/IT Industry to
              jumpstart my career!
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
                  <span style={{ marginLeft: "6px" }}>Telegram handle</span>
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
          </Col>
        </Container>
      </Row>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a href="https://github.com/LoyChaiEe" target="_blank" rel="noreferrer">
          <img
            src={github}
            className="logo"
            style={{ padding: "6px" }}
            alt="github"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/loy-chai-889711235/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={linkedIn}
            className="logo"
            style={{ padding: "6px" }}
            alt="linkedIn"
          />
        </a>
        <a
          href="https://www.facebook.com/chaiee.loy"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={facebook}
            className="logo"
            style={{ padding: "6px" }}
            alt="facebook"
          />
        </a>
        <a href="google" target="_blank">
          <img
            src={leetcode}
            className="logo"
            style={{ padding: "6px" }}
            alt="leetcode"
          />
        </a>
      </div>
    </Container>
  );
}

export default About;
