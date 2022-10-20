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
    <Container className="centerDiv" id="skills">
      <h1>Professional Skills</h1>
      <Container className="centerDiv" id="skillswrap">
        <Col style={{ width: "100%"}}>
          <label>CSS</label>
          <ProgressBar>
            <ProgressBar data-aos="zoom-in-right" now={basics} label={"test"} />
          </ProgressBar>
          <label>CSS</label>
          <ProgressBar>
            <ProgressBar data-aos="zoom-in-right" now={basics} label={"test"} />
          </ProgressBar>
          <label>CSS</label>
          <ProgressBar>
            <ProgressBar data-aos="zoom-in-right" now={basics} label={"test"} />
          </ProgressBar>
          <label>CSS</label>
          <ProgressBar>
            <ProgressBar data-aos="zoom-in-right" now={basics} label={"test"} />
          </ProgressBar>
        </Col>
        <Col style={{ width: "100%" }}>
          <label>CSS</label>
          <ProgressBar>
            <ProgressBar data-aos="zoom-in-right" now={basics} label={"test"} />
          </ProgressBar>
          <label>CSS</label>
          <ProgressBar>
            <ProgressBar data-aos="zoom-in-right" now={basics} label={"test"} />
          </ProgressBar>
          <label>CSS</label>
          <ProgressBar>
            <ProgressBar data-aos="zoom-in-right" now={basics} label={"test"} />
          </ProgressBar>
          <label>CSS</label>
          <ProgressBar>
            <ProgressBar data-aos="zoom-in-right" now={basics} label={"test"} />
          </ProgressBar>
        </Col>
      </Container>
    </Container>
  );
}

export default Skills;
