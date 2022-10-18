import React from "react";
import { Container } from "react-bootstrap";
import pic from "../hero1.jpg"
import { useMediaQuery } from "react-responsive";
import Button from "react-bootstrap/Button";

function Hero(){
  const isMobile = useMediaQuery({ query: "(max-width: 720px)" });
  let element;
  if (isMobile) {
    element = <MobileHero />;
  } else {
    element = <PCHero />;
  }
  return element;
}


function PCHero(){
  return (
    <Container id="home" fluid>
      <img src={pic} alt="test" />
      <div className="center">
        <h6>
          <code>Hello world! My name is </code>
        </h6>
        <h1>Loy Chai Ee</h1>
        <h3>An Aspiring Software Engineer</h3>
        <Button href="../resume-sample.pdf" download>
          Download Resume
        </Button>
      </div>
    </Container>
  );
}

function MobileHero(){
  return (
    <Container id="home" fluid>
      <p></p>
    </Container>
  );;
}

export default Hero