import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import logo from "../logo.png"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Project() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>Card Title 1</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">See website</Button>
          </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>Card Title 2</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>Card Title 3</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Carousel.Item>
    </Carousel>
  );
}

export default Project;
