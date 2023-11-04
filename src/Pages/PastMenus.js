//React components
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import OurNav from "../Components/OurNav.js";
import PastMenu from "../Components/PastMenu.js";

//images
import bruleePork from "../images/brulee-pork-belly.jpg";

class PastMenus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: "past menu information",
    };
  }

  pastMenuTitleList = [
    {
      image: bruleePork, //image item here
      title: "menu 1",
      description: "menu 1 description",
    },
    {
      image: bruleePork, //image item here
      title: "menu 2",
      description: "menu 2 description",
    },
  ];

  loadPastMenu = (menuTitle) => {
    this.setState({ menu: menuTitle });
  };

  render() {
    return (
      <div className="container-fluid p-0 m-0">
        <OurNav />
        <h1>Our past menus</h1>
        <p>
          Check out our past menus here! We continually innovate and create new
          dishes to serve to our customers, you can find our past creations
          here.
        </p>
        <p>
          Browse the gallery below and click on the menu that you wish to see in
          detail
        </p>
        {/* Carousel with past menus, onclick handler to change state */}
        <div className="row">
          <Carousel interval={null} className="col-lg-8 col-sm-12">
            {this.pastMenuTitleList.map((object) => (
              <Carousel.Item
                key={object.title}
                onClick={() => this.loadPastMenu(object.title)}
              >
                <div
                  className="car-item"
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
        <PastMenu menu={this.state.menu} />
      </div>
    );
  }
}

export default PastMenus;
