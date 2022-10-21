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

function Work() {
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
    <Container id="work">
      <h1 style={{ textAlign: "center", marginBottom: "4vh" }}>
        Professional Work Experience
      </h1>
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
        id="work"
        style={{
          color: "#20C20E",
          fontFamily: "Share Tech Mono",
        }}
      >
        <h1
          style={{
            fontSize: "max(3vw, 32pt)",
            fontFamily: "Rubik Mono One",
          }}
        >
          4.Professional Work Experience
        </h1>
        <Row style={{}}>
          <Col sm={3} style={{}}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link
                  eventKey="first"
                  style={{ fontSize: "max(1.2vw, 20px)", fontWeight: "bold" }}
                >
                  Cisco
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="second"
                  style={{ fontSize: "max(1.2vw, 20px)", fontWeight: "bold" }}
                >
                 ST Electronics
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
                  Cisco Certified Network Associate{" "}
                  <span style={{ color: "red", fontWeight: "bold" }}>@</span>{" "}
                  <span style={{ color: "magenta", fontWeight: "bold" }}>
                    Cisco
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
                      Learnt how to install, operate, configure, and verify
                      basic IPv4 and IPv6 networks.
                    </li>
                    <li>
                      Covered configuring network components such as
                      switches,routers, and wireless LAN controllers; managing
                      network devices; and identifying basic security threats.
                    </li>
                    <li>
                      Established a foundation in network programmability,
                      automation, and software-defined networking.
                    </li>
                  </ul>
                </p>
              </Tab.Pane>
              <Tab.Pane
                eventKey="second"
                style={{ fontSize: "max(1.2vw, 20px)" }}
              >
                <h2 style={{ color: "#0047AB", fontWeight: "bold" }}>
                  Software Development Intern{" "}
                  <span style={{ color: "red", fontWeight: "bold" }}>@</span>{" "}
                  <span style={{ color: "magenta", fontWeight: "bold" }}>
                    ST Electronics
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
                      Provided cybersecurity professionals with a conducive
                      environment to enhance their skills through the practical
                      application of knowledge.
                    </li>
                    <li>
                      Assisted in STECA's deep domain expertise and operational
                      experience
                    </li>
                    <li>
                      Imparted realistic cybersecurity training to the trainees
                      using real-life use cases to correlate with key concepts
                      of cybersecurity.
                    </li>
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
export default Work;
