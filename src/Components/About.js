import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import aos from "aos";
import "aos/dist/aos.css";
import { useMediaQuery } from "react-responsive";

import whatsapp from "../whatsapp.svg";
import calender from "../calendar.svg";
import email from "../envelope.svg";
import telegram from "../telegram.svg";
import location from "../location.svg";
import linkedIn from "../linkedin.svg";
import github from "../github.svg";
import facebook from "../facebook.svg";
import leetcode from "../leetcode.svg";

function About() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 359px)" });
  let output;
  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);
  if (isSmallScreen) {
    output = <SmallScreen />;
  } else {
    output = <Normal />;
  }
  return output;
}
function SmallScreen() {
  return (
    <Container
      data-aos="fade-up"
      id="about"
      style={{
        color: "#20C20E",
        fontFamily: "Share Tech Mono",
      }}
    >
      <Row>
        <Container>
          <Col>
            <h2>About me</h2>
            <p>
              Hello! I'm Chai Ee. I enjoy tinkering around with
              electronics/software and finding out how things work.
            </p>
            <p>
              I like coding, especially backend, and am passionate about secured
              websites and optimizing algorithms. I always seek to look for ways
              that we can improve our products. I also like tinnkering around
              electronic, currently ddoing an Arduino Project
            </p>
            <p>
              Currently, I am an undergraduate at Nanyang Technological
              University, studying Electrical and Electronic Engineering. I'm
              looking for exciting opportunities to gain professional exposure
              in the Software/IT Industry to jumpstart my career!
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
                  <span style={{ marginLeft: "6px" }}>age: 22</span>
                </div>
                <div>
                  <img src={whatsapp} alt="whatsapp" />
                  <span style={{ marginLeft: "6px" }}>Phone: +65 81786416</span>
                </div>
                <div>
                  <img src={telegram} alt="telegram" />
                  <span style={{ marginLeft: "6px" }}>
                    Telegram: @def_rebirth
                  </span>
                </div>
                <div>
                  <img src={email} alt="email" />
                  <span style={{ marginLeft: "6px" }}>
                    Email: chaiee@live.com.sg
                  </span>
                </div>
                <div>
                  <img src={location} alt="location" />
                  <span style={{ marginLeft: "6px" }}>
                    Address: Singapore, Singapore
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
        </Container>
      </Row>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "5vh",
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

function Normal() {
  return (
    <Container
      data-aos="fade-up"
      id="about"
      style={{
        color: "#20C20E",
        fontFamily: "Share Tech Mono",
      }}
    >
      <Row>
        <Container>
          <Col>
            <h2
              style={{
                fontFamily: "Rubik Mono One",
                fontSize: "max(3vw, 1.5em)",
              }}
            >
              1.About me
            </h2>
            <p style={{ fontSize: "max(1.4vw, 20px)" }}>
              Hello! I'm Chai Ee. I enjoy tinkering around with
              electronics/software and finding out how things work.
            </p>
            <p style={{ fontSize: "max(1.4vw, 20px)" }}>
              I like coding, especially backend, and am passionate about secured
              websites and optimizing algorithms. I always seek to look for ways
              that we can improve our products. I also like tinnkering around
              electronic, currently ddoing an Arduino Project
            </p>
            <p style={{ fontSize: "max(1.4vw, 20px)" }}>
              Currently, I am an undergraduate at Nanyang Technological
              University, studying Electrical and Electronic Engineering. I'm
              looking for exciting opportunities to gain professional exposure
              in the Software/IT Industry to jumpstart my career!
            </p>
          </Col>
        </Container>
        <Container>
          <Col id="Bio">
            <Row>
              <h2>Bio</h2>
              <Col style={{ paddingRight: "0px" }}>
                <div>
                  <img src={calender} alt="age" className="logo-small" />
                  <span
                    style={{ marginLeft: "6px", fontSize: "max(1.2vw, 16px)" }}
                  >
                    age
                  </span>
                </div>
                <div>
                  <img src={whatsapp} alt="whatsapp" className="logo-small" />
                  <span
                    style={{ marginLeft: "6px", fontSize: "max(1.2vw, 16px)" }}
                  >
                    Phone
                  </span>
                </div>
                <div>
                  <img src={telegram} alt="telegram" className="logo-small" />
                  <span
                    style={{ marginLeft: "6px", fontSize: "max(1.2vw, 16px)" }}
                  >
                    Telegram
                  </span>
                </div>
                <div>
                  <img src={email} alt="email" className="logo-small" />
                  <span
                    style={{ marginLeft: "6px", fontSize: "max(1.2vw, 16px)" }}
                  >
                    Email
                  </span>
                </div>
                <div>
                  <img src={location} alt="location" className="logo-small" />
                  <span
                    style={{ marginLeft: "6px", fontSize: "max(1.2vw, 16px)" }}
                  >
                    Address
                  </span>
                </div>
              </Col>
              <Col>
                <div style={{ fontSize: "max(1.2vw, 16px)" }}>22</div>
                <div style={{ fontSize: "max(1.2vw, 16px)" }}>+65 81786416</div>
                <div style={{ fontSize: "max(1.2vw, 16px)" }}>@def_rebirth</div>
                <div style={{ fontSize: "max(1.2vw, 16px)" }}>
                  chaiee@live.com.sg
                </div>
                <div style={{ fontSize: "max(1.2vw, 16px)" }}>
                  Singapore, Singapore
                </div>
              </Col>
            </Row>
          </Col>
        </Container>
      </Row>
      <h3 style={{margin: "3vh 0px"}}>Accounts</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1vw",
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
