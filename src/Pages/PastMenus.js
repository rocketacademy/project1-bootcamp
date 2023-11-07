//React components
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import OurNav from "../Components/OurNav.js";
import PastMenu from "../Components/PastMenu.js";

//images
import bruleePork from "../images/brulee-pork-belly.jpg";

// CSS
import "./PastMenus.css";

class PastMenus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: null,
    };
  }

  pastMenuTitleList = [
    {
      image: bruleePork, //image item here
      title: "Indochine Menu",
      description: "Indochine description",
    },
    {
      image: bruleePork, //image item here
      title: "South Asia Menu",
      description: "South Asia description",
    },
  ];

  loadPastMenu = (menuTitle) => {
    this.setState({ menu: menuTitle });
  };

  render() {
    return (
      <div className="container-fluid p-0 m-0">
        <OurNav />
        <div className="row">
          <h1>Our past menus</h1>
          <p>
            Check out our past menus here! We continually innovate and create
            new dishes to serve to our customers, you can find our past
            creations here.
          </p>
          <p>
            Browse the gallery below and click on the menu that you wish to see
            in detail.
          </p>
        </div>
        {/* Carousel with past menus, onclick handler to change state */}
        <div className="row justify-content-center past-menus-carousel">
          <Carousel interval={null} className="col-lg-8 col-sm-12">
            {this.pastMenuTitleList.map((object) => (
              <Carousel.Item
                key={object.title}
                onClick={() => this.loadPastMenu(object.title)}
              >
                <div
                  className="past-menus car-item"
                  style={{ backgroundImage: `url(${object.image})` }}
                ></div>
                <Carousel.Caption className="car-caption">
                  <h3>{object.title}</h3>
                  <p>{object.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        {/* pass the menu props into the PastMenu component to display the menu discription and carousel of images */}
        {this.state.menu === null ? null : <PastMenu menu={this.state.menu} />}
      </div>
    );
  }
}

export default PastMenus;
