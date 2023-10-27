//React components
import React from "react";
import Carousel from "react-bootstrap/Carousel";

//images
import festMenu from "../images/festive-menu.png";
import brulePork from "../images/brule-pork-belly.jpg";
import yellowCurryBakedFish from "../images/yellow-curry-baked-fish.jpg";
import asianTrifle from "../images/asian-trifle.jpg";

class CurrMenu extends React.Component {
  render() {
    return (
      <Carousel interval={null}>
        <Carousel.Item>
          <div
            className="car-item"
            style={{ backgroundImage: `url(${festMenu})` }}
          ></div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="car-item"
            style={{ backgroundImage: `url(${brulePork})` }}
          ></div>
          <Carousel.Caption>
            <div className="car-caption">
              <h3>Brule Pork Belly</h3>
              <p>
                Plump pork belly with brule skin, served with homemade kimchi.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="car-item"
            style={{ backgroundImage: `url(${yellowCurryBakedFish})` }}
          ></div>
          <Carousel.Caption>
            <div className="car-caption">
              <h3>Yellow Curry Baked Fish</h3>
              <p>
                This fish is backed to lock in the flavours and mosture
                resulting in a juicy and flavourful fish each time.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="car-item"
            style={{ backgroundImage: `url(${asianTrifle})` }}
          ></div>
          <Carousel.Caption>
            <div className="car-caption">
              <h3>Asian Trifle</h3>
              <p>Our unique asian style trifle to finish of the meal.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CurrMenu;
