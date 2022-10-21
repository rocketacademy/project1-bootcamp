import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useMediaQuery } from "react-responsive";
import aos from "aos";
import "aos/dist/aos.css";


function Education() {
  useEffect(() => {
    aos.init({ duration: 1500 });
  }, []);
  const isMobile = useMediaQuery({ query: "(max-width: 720px)" });
  let element;
  if (isMobile) {
    element = <Mobile />;
  } else {
    element = <PC />;
  }
  return element;
}

function Mobile() {
  return (
    <Container id="education">
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="home" title="Cisco">
          <h2>Cisco Certified Network Associate @ Cisco</h2>
          <p>
            <ul>
              <li>
                Learnt how to install, operate, configure, and verify basic IPv4
                and IPv6 networks.
              </li>
              <li>
                Covered configuring network components such as switches,routers,
                and wireless LAN controllers; managing network devices; and
                identifying basic security threats.
              </li>
              <li>
                Established a foundation in network programmability, automation,
                and software-defined networking.
              </li>
            </ul>
          </p>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <h2>Destiny Player @ Bungie</h2>
          <p>
            <ul>
              <li>
                Learnt how to install, operate, configure, and verify basic IPv4
                and IPv6 networks.
              </li>
              <li>
                Covered configuring network components such as switches,routers,
                and wireless LAN controllers; managing network devices; and
                identifying basic security threats.
              </li>
              <li>
                Established a foundation in network programmability, automation,
                and software-defined networking.
              </li>
            </ul>
          </p>
        </Tab>
        <Tab eventKey="longer-tab" title="Loooonger Tab">
          <h2>Cisco Certified Network Associate @ Cisco</h2>
          <p>
            <ul>
              <li>
                Learnt how to install, operate, configure, and verify basic IPv4
                and IPv6 networks.
              </li>
              <li>
                Covered configuring network components such as switches,routers,
                and wireless LAN controllers; managing network devices; and
                identifying basic security threats.
              </li>
              <li>
                Established a foundation in network programmability, automation,
                and software-defined networking.
              </li>
            </ul>
          </p>
        </Tab>
      </Tabs>
    </Container>
  );
}

function PC() {
  return (
    <Tab.Container defaultActiveKey="first">
      <Container
        id="education"
        style={{
          color: "#20C20E",
          fontFamily: "Share Tech Mono",
        }}
      >
        <h1
          style={{
            fontFamily: "Rubik Mono One",
            fontSize: "max(3vw, 32pt)",
            fontWeight: "bold",
          }}
        >
          2.Education/Courses
        </h1>
        <Row style={{}}>
          <Col sm={3} style={{}}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link
                  eventKey="first"
                  style={{ fontSize: "max(1.2vw, 20px)", fontWeight: "bold" }}
                >
                  NTU(B.Eng)
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="second"
                  style={{ fontSize: "max(1.2vw, 20px)", fontWeight: "bold" }}
                >
                  NUS(Msc)
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="third"
                  style={{ fontSize: "max(1.2vw, 20px)", fontWeight: "bold" }}
                >
                  RA (Basic)
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="fourth"
                  style={{ fontSize: "max(1.2vw, 20px)", fontWeight: "bold" }}
                >
                  RA (Bootcamp)
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} style={{ padding: "0px" }}>
            <Tab.Content>
              <Tab.Pane
                eventKey="first"
                style={{ fontSize: "max(1.2vw, 20px)" }}
              >
                <h2 style={{ color: "#0047AB", fontWeight: "bold" }}>
                  Bachelor of Engineering in Electrical and Electronics
                  Engineering{" "}
                  <span style={{ color: "red", fontWeight: "bold" }}>@</span>{" "}
                  <span style={{ color: "magenta", fontWeight: "bold" }}>
                    Nanyang Technological University
                  </span>
                </h2>
                <span
                  style={{ fontSize: "max(1.2vw, 16px)", color: "aquamarine" }}
                >
                  From Mar 2017 to May 2017
                </span>
                <p>
                  <ul>
                    <li>
                      Learnt the foundations of EEE Specialisation: Digital
                      Electronic, Analog Electronic, Circuit Analysis,
                      Semiconductor Fundamentals, Electrical Devices & Machines,
                      Signal & Systems Engineering Electromagnetics
                    </li>
                    <li>Specialisation: COMPUTER ENGINEERING</li>
                    <li>
                      Final Year Project: Wait till the time comes :p
                    </li>
                  </ul>
                </p>
              </Tab.Pane>
              <Tab.Pane
                eventKey="second"
                style={{ fontSize: "max(1.2vw, 20px)" }}
              >
                <h2 style={{ color: "#0047AB", fontWeight: "bold" }}>
                  Master of Computing -- Artificial Intelligence Specialisation{" "}
                  <span style={{ color: "red", fontWeight: "bold" }}>@</span>{" "}
                  <span style={{ color: "magenta", fontWeight: "bold" }}>
                    National University of Singapore
                  </span>
                </h2>
                <span
                  style={{ fontSize: "max(1.2vw, 16px)", color: "aquamarine" }}
                >
                  From Jul 20xx to May 20xx
                </span>
                <p>
                  <ul>
                    <li>Maybe in the future lolz.</li>
                    <li>Have to survive this hell call NTU EEE</li>
                  </ul>
                </p>
              </Tab.Pane>
              <Tab.Pane
                eventKey="third"
                style={{ fontSize: "max(1.2vw, 20px)" }}
              >
                <h2 style={{ color: "#0047AB", fontWeight: "bold" }}>
                  Coding Basic Course{" "}
                  <span style={{ color: "red", fontWeight: "bold" }}>@</span>{" "}
                  <span style={{ color: "magenta", fontWeight: "bold" }}>
                    Rocket academy
                  </span>
                </h2>
                <span
                  style={{ fontSize: "max(1.2vw, 16px)", color: "aquamarine" }}
                >
                  June 2022
                </span>
                <p>
                  <ul>
                    <li>
                      Learnt Basic Javascript, HTML, CSS, github, DOM
                      manipulation
                    </li>
                    <li>Understood Fundamental Computational Thinking</li>
                    <li>Capstone Project: Blackjack</li>
                  </ul>
                </p>
              </Tab.Pane>
              <Tab.Pane
                eventKey="fourth"
                style={{ fontSize: "max(1.2vw, 20px)" }}
              >
                <h2 style={{ color: "#0047AB", fontWeight: "bold" }}>
                  Software Enginnering Bootcamp{" "}
                  <span style={{ color: "red", fontWeight: "bold" }}>@</span>{" "}
                  <span style={{ color: "magenta", fontWeight: "bold" }}>
                    Rocket Academy
                  </span>
                </h2>
                <span
                  style={{ fontSize: "max(1.2vw, 16px)", color: "aquamarine" }}
                >
                  From Sept 2022 to Apr 2023
                </span>
                <p>
                  <ul>
                    <li>
                      Learnt Frotend Frameworks such as React Backend such as
                      SQL, Sequelize, Express.js
                    </li>
                    <li>Deploy atabases such as Firebase</li>
                    <li>Learnt Backend such as SQL, Sequelize, Express.js</li>
                    <li>
                      Learnt Data Structures and algorithms for efficient coding
                      of algorithms
                    </li>
                    <li>Capstone Project: Soon :p</li>
                  </ul>
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Container>
    </Tab.Container>
  );
}
export default Education;
