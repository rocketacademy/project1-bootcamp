import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import logo from "../logo.png";
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
      <h1 style={{ textAlign: "center", marginBottom: "2vh" }}>My Projects</h1>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        variant="dark"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          paddingBottom: "10vh"
        }}
      >
        <Carousel.Item>
          <Container className="cardContainer">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title>Card Title 1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Container>
        </Carousel.Item>
        <Carousel.Item style={{ alignItems: "center" }}>
          <Container className="cardContainer">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title>Card Title 2</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container className="cardContainer">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title>Card Title 3</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Container>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Project;
