//React components
import React from "react";
import Carousel from "react-bootstrap/Carousel";

//images
import festMenu from "../images/festive-menu.png";
import bruleePork from "../images/brulee-pork-belly.jpg";
import yellowCurryBakedFish from "../images/yellow-curry-baked-fish.jpg";
import asianTrifle from "../images/asian-trifle.jpg";

class CurrMenu extends React.Component {
  currMenuTitleList = [
    {
      image: festMenu, //image item here
      caption: false,
    },
    {
      image: bruleePork, //image item here
      caption: true,
      title: "Brulee Pork Belly",
      description:
        "Plump pork belly with brule skin, served with homemade kimchi.",
    },
    {
      image: yellowCurryBakedFish, //image item here
      caption: true,
      title: "yellow Curry Baked Fish",
      description:
        "This fish is backed to lock in the flavours and moisture resulting in a juicy and flavourful fish each time.",
    },
    {
      image: asianTrifle, //image item here
      caption: true,
      title: "Asian Trifle",
      description: "Our unique asian style trifle to finish of the meal.",
    },
  ];
  render() {
    return (
      <Carousel interval={10000}>
        {this.currMenuTitleList.map((object, index) => (
          <Carousel.Item key={index}>
            <div
              className="curr-menu car-item"
              style={{ backgroundImage: `url(${object.image})` }}
            ></div>
            {object.caption && (
              <Carousel.Caption className="car-caption">
                <h3>{object.title}</h3>
                <p>{object.description}</p>
              </Carousel.Caption>
            )}
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default CurrMenu;
