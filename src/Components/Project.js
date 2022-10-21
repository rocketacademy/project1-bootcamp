import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import logo from "../assets/logos/logo.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

function Project() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container id="project">
      <h1
        style={{
          textAlign: "center",
          marginBottom: "2vh",
          fontSize: "max(3vw, 22pt)",
          fontFamily: "Rubik Mono One",
          color: "#20C20E",
        }}
      >
        5.Projects
      </h1>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        variant="light"
        className="centerDiv"
        style={{
          flexDirection: "column",
          paddingBottom: "10vh",
          color: "#20C20E",
          fontFamily: "Share Tech Mono",
        }}
      >
        <Carousel.Item>
          <Container className="centerDiv">
            <Card className="cardSize" bg={"dark"}>
              <Card.Img
                variant="top"
                src={logo}
                style={{ borderRadius: "1vw" }}
              />
              <Card.Body>
                <Card.Title
                  style={{ fontSize: "max(2vw, 28px)", fontWeight: "bold" }}
                >
                  Blackjack
                </Card.Title>
                <span
                  style={{ color: "magenta", fontSize: "max(0.8vw, 28px)" }}
                >
                  HTML CSS Javascript DOM
                </span>
                <Card.Text style={{ fontSize: "max(1.3vw, 16px)" }}>
                  <ul>
                    <li>
                      Create a multiplayer blackjack game, up till 6 players
                    </li>
                    <li>Game will track user's current bank balance and bet</li>
                    <li style={{ color: "aquamarine" }}>
                      <a
                        href="https://github.com/LoyChaiEe/basics-blackjack-chaiee"
                        style={{ textDecoration: "none", color: "aquamarine" }}
                      >
                        Link to Github Repo
                      </a>
                    </li>
                  </ul>
                </Card.Text>
                <Button className="link-button">
                  <a href="https://loychaiee.github.io/basics-blackjack-chaiee/">
                    Github page
                  </a>
                </Button>
              </Card.Body>
            </Card>
          </Container>
        </Carousel.Item>
        <Carousel.Item style={{ alignItems: "center" }}>
          <Container className="centerDiv">
            <Card className="cardSize" bg={"dark"}>
              <Card.Img
                variant="top"
                src={logo}
                style={{ borderRadius: "1vw" }}
              />
              <Card.Body>
                <Card.Title
                  style={{ fontSize: "max(2vw, 28px)", fontWeight: "bold" }}
                >
                  Portfolio (Frontend)
                </Card.Title>
                <span
                  style={{ color: "magenta", fontSize: "max(0.8vw, 28px)" }}
                >
                  HTML CSS Javascript React Bootstrap
                </span>
                <Card.Text style={{ fontSize: "max(1.3vw, 16px)" }}>
                  <ul>
                    <li>Create a responsive portfolio website using React</li>
                    <li>Use AOS to create transition for elements</li>
                    <li>
                      Allows using to see Projects via carousel and send an
                      email to me
                    </li>
                    <li style={{ color: "aquamarine" }}>
                      <a
                        href="https://github.com/LoyChaiEe/project1-bootcamp"
                        style={{ textDecoration: "none", color: "aquamarine" }}
                      >
                        Link to Github Repo
                      </a>
                    </li>
                  </ul>
                </Card.Text>
                <Button className="link-button">
                  <a href="#placeholder">Github page</a>
                </Button>
              </Card.Body>
            </Card>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container className="centerDiv">
            <Card className="cardSize" bg={"dark"}>
              <Card.Img
                variant="top"
                src={logo}
                style={{ borderRadius: "1vw" }}
              />
              <Card.Body>
                <Card.Title
                  style={{ fontSize: "max(2vw, 28px)", fontWeight: "bold" }}
                >
                  EEE FYP
                </Card.Title>
                <span
                  style={{ color: "magenta", fontSize: "max(0.8vw, 28px)" }}
                >
                  HTML CSS Javascript React Bootstrap
                </span>
                <Card.Text style={{ fontSize: "max(1.3vw, 16px)" }}>
                  <ul>
                    <li>Still Unknown</li>
                    <li>Come back after 2 years</li>
                    <li style={{ color: "aquamarine" }}>
                      <a
                        href="https://github.com/LoyChaiEe/basics-blackjack-chaiee"
                        style={{ color: "aquamarine" }}
                      >
                        Link to Github Repo
                      </a>
                    </li>
                  </ul>
                </Card.Text>
                <Button className="link-button">
                  <a href="#placeholder">Github Page</a>
                </Button>
              </Card.Body>
            </Card>
          </Container>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}


export default Project;
