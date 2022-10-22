import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import Button from "react-bootstrap/Button";
import aos from "aos";
import "aos/dist/aos.css";

function Hero() {
  const isMobile = useMediaQuery({ query: "(max-width: 719px)" });
  let element;
  if (isMobile) {
    element = <MobileHero />;
  } else {
    element = <PCHero />;
  }
  return element;
}

function PCHero() {
  useEffect(() => {
    aos.init({ duration: 1500 });
  }, []);
  return (
    <Container id="home" className="centerDiv" fluid>
      <div
        className="HeroLeft"
        style={{
          color: "#20C20E",
          fontFamily: "Share Tech Mono",
        }}
      >
        <h6 data-aos="fade-right" style={{ fontSize: "1.2vw" }}>
          Hello world! My name is
        </h6>
        <h1
          data-aos="fade-right"
          style={{ fontSize: "5.5vw", fontWeight: "bolder" }}
        >
          Loy Chai Ee
        </h1>
        <h3
          data-aos="fade-right"
          style={{ color: "magenta", fontSize: "2.4vw" }}
        >
          An Aspiring Software Engineer
        </h3>
        <p
          data-aos="fade-right"
          style={{fontSize: "1.2vw" }}
        >
          Undergraduate at Nanyang Technological University
          <br />
          Loves tinkering around with software and electronics!
        </p>
        <Button
          href="../resume-sample.pdf"
          download
          style={{
            fontSize: "1.8vw",
            paddingLeft: "16px",
            backgroundColor: "transparent",
            borderColor: "#20C20E",
            fontWeight: "bolder",
            color: "#20C20E",
            borderWidth: "5px",
          }}
          data-aos="fade-right"
        >
          Download Resume
        </Button>
      </div>
    </Container>
  );
}

function MobileHero() {
  return (
    <Container id="home" className="centerDiv" fluid>
      <div
        style={{
          textAlign: "center",
          color: "#20C20E",
          fontFamily: "Share Tech Mono",
        }}
      >
        <h6 data-aos="fade-right" style={{ fontSize: "20px" }}>
          Hello world! My name is
        </h6>
        <h1
          data-aos="fade-right"
          style={{ fontWeight: "bolder", fontSize: "40pt" }}
        >
          Loy Chai Ee
        </h1>
        <h3
          data-aos="fade-right"
          style={{ color: "magenta", fontSize: "30pt" }}
        >
          An Aspiring Software Engineer
        </h3>
        <p data-aos="fade-right" style={{ fontSize: "20px" }}>
          Undergraduate at Nanyang Technological University
          <br />
          Loves tinkering around with software and electronics!
        </p>
        <Button
          href="../resume-sample.pdf"
          download
          style={{
            fontSize: "20px",
            paddingLeft: "16px",
            backgroundColor: "transparent",
            borderColor: "#20C20E",
            fontWeight: "bolder",
            color: "#20C20E",
            borderWidth: "2px",
          }}
          data-aos="fade-right"
        >
          Download Resume
        </Button>
      </div>
    </Container>
  );
}

export default Hero;
