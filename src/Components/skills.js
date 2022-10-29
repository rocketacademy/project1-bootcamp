import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import aos from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    aos.init({ duration: 1500 });
  }, []);
  const 
    expert = 85,
    basics = 33,
    intermediate = 50,
    advanced = 70;
  return (
    <Container
      className="centerDiv"
      id="skills"
      style={{
        color: "#20C20E",
        fontFamily: "Share Tech Mono",
      }}
    >
      <h1
        style={{
          fontFamily: "Rubik Mono One",
          fontSize: "max(3.0vw, 22pt)",
        }}
      >
        3.Professional Skills
      </h1>
      <Container className="centerDiv" id="skillswrap">
        <Col style={{ width: "100%" }}>
          <label
            style={{
              fontSize: "max(1.5vw, 27px)",
              fontWeight: "bold",
            }}
          >
            Javascript
          </label>
          <ProgressBar style={{ height: "2.3vh" }}>
            <ProgressBar
              data-aos="zoom-in-right"
              now={advanced}
              label={"ADVANCED"}
              className="advanced"
              style={{ fontSize: "1.4vh", color: "black", fontWeight: "bold" }}
            />
          </ProgressBar>
          <label
            style={{
              fontSize: "max(1.5vw, 27px)",
              fontWeight: "bold",
            }}
          >
            HTML && CSS
          </label>
          <ProgressBar style={{ height: "2.3vh" }}>
            <ProgressBar
              data-aos="zoom-in-right"
              now={advanced}
              label={"ADVANCED"}
              className="advanced"
              style={{ fontSize: "1.4vh", color: "black", fontWeight: "bold" }}
            />
          </ProgressBar>
          <label
            style={{
              fontSize: "max(1.5vw, 27px)",
              fontWeight: "bold",
            }}
          >
            C/C++
          </label>
          <ProgressBar style={{ height: "2.3vh" }}>
            <ProgressBar
              data-aos="zoom-in-right"
              now={intermediate}
              label={"INTERMEDIATE"}
              className="intermediate"
              style={{ fontSize: "1.4vh", color: "black", fontWeight: "bold" }}
            />
          </ProgressBar>
          <label
            style={{
              fontSize: "max(1.5vw, 27px)",
              fontWeight: "bold",
            }}
          >
            {"Python(Data analysis)"}
          </label>
          <ProgressBar style={{ height: "2.3vh" }}>
            <ProgressBar
              data-aos="zoom-in-right"
              now={intermediate}
              label={"INTERMEDIATE"}
              className="intermediate"
              style={{ fontSize: "1.4vh", color: "black", fontWeight: "bold" }}
            />
          </ProgressBar>
        </Col>
        <Col style={{ width: "100%" }}>
          <label
            style={{
              fontSize: "max(1.5vw, 27px)",
              fontWeight: "bold",
            }}
          >
            Firebase
          </label>
          <ProgressBar style={{ height: "2.3vh" }}>
            <ProgressBar
              data-aos="zoom-in-right"
              now={intermediate}
              label={"INTERMEDIATE"}
              className="intermediate"
              style={{ fontSize: "1.4vh", color: "black", fontWeight: "bold" }}
            />
          </ProgressBar>
          <label
            style={{
              fontSize: "max(1.5vw, 27px)",
              fontWeight: "bold",
            }}
          >
            React
          </label>
          <ProgressBar style={{ height: "2.3vh" }}>
            <ProgressBar
              data-aos="zoom-in-right"
              now={advanced}
              label={"ADVANCED"}
              className="advanced"
              style={{ fontSize: "1.4vh", color: "black", fontWeight: "bold" }}
            />
          </ProgressBar>
          <label
            style={{
              fontSize: "max(1.5vw, 27px)",
              fontWeight: "bold",
            }}
          >
            Git/github
          </label>
          <ProgressBar style={{ height: "2.3vh" }}>
            <ProgressBar
              data-aos="zoom-in-right"
              now={advanced}
              label={"ADVANCED"}
              className="advanced"
              style={{ fontSize: "1.4vh", color: "black", fontWeight: "bold" }}
            />
          </ProgressBar>
          <label
            style={{
              fontSize: "max(1.5vw, 27px)",
              fontWeight: "bold",
            }}
          >
            Visual Code Studio
          </label>
          <ProgressBar style={{ height: "2.3vh" }}>
            <ProgressBar
              data-aos="zoom-in-right"
              now={expert}
              label={"EXPERT"}
              className="expert"
              style={{ fontSize: "1.4vh", color: "black", fontWeight: "bold" }}
            />
          </ProgressBar>
        </Col>
      </Container>
    </Container>
  );
}

export default Skills;
