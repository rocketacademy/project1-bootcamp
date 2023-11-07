//React components
import React from "react";
import Carousel from "react-bootstrap/Carousel";

//images
import bruleePork from "../images/brulee-pork-belly.jpg";

class PastMenu extends React.Component {
  pastMenuDict = {
    "Indochine Menu": {
      description:
        "Drawing inspirations from all parts of Southeast Asia, this menu features some familiar dishes from our past menu as well as a new star of the evening, our very own Panaeng Duck Curry.",
      starters: [
        {
          image: bruleePork,
          title: "Galloping Horses",
          description: "Galloping Horses description",
        },
        {
          image: bruleePork,
          title: "Mini Banh Mi",
          description: "Mini Banh Mi description",
        },
        {
          image: bruleePork,
          title: "Grilled Num Ansom",
          description: "Grilled Num Ansom description",
        },
        {
          image: bruleePork,
          title: "Chickpea Tofu Salad",
          description: "Chickpea Tofu Salad description",
        },
      ],
      mains: [
        {
          image: bruleePork,
          title: "Panaeng Duck Curry",
          description: "Panaeng Duck Curry description",
        },
        {
          image: bruleePork,
          title: "Sai Oua Pork Sausages",
          description: "Sai Oua Pork Sausages description",
        },
        {
          image: bruleePork,
          title: "Green Curry of Fish (8-12 pax)",
          description: "Green Curry of Fish (8-12 pax) description",
        },
        {
          image: bruleePork,
          title: "Cauliflower Laab",
          description: "Cauliflower Laab description",
        },
        {
          image: bruleePork,
          title: "Shrimp Paste Relish",
          description: "Shrimp Paste Relish description",
        },
        {
          image: bruleePork,
          title: "Lemongrass Jasmine Rice",
          description: "Lemongrass Jasmine Rice description",
        },
      ],
      desserts: [
        {
          image: bruleePork,
          title: "Smoked Coconut Ice Cream with Cake Croutons",
          description:
            "Smoked Coconut Ice Cream with Cake Croutons description",
        },
      ],
    },
    "South Asia Menu": {
      description:
        "Fromj the south of Asia, we explore some lesser eaten foods in Singapore. The aromatic spices and flavours of this menu are top notch!",
      starters: [
        {
          image: bruleePork,
          title: "Pani Puri",
          description: "Pani Puri description",
        },
        {
          image: bruleePork,
          title: "Aloo Tikki",
          description: "Aloo Tikki description",
        },
        {
          image: bruleePork,
          title: "Doh Kleh Salad",
          description: "Doh Kleh Salad description",
        },
        {
          image: bruleePork,
          title: "Murgh Kofta",
          description: "Murgh Kofta description",
        },
      ],
      mains: [
        {
          image: bruleePork,
          title: "Slow Roasted Yoghurt Duck",
          description: "Slow Roasted Yoghurt Duck description",
        },
        {
          image: bruleePork,
          title: "Keralan Fried Fish with Corn & Mango Salad",
          description: "Keralan Fried Fish with Corn & Mango Salad description",
        },
        {
          image: bruleePork,
          title: "Sri Lankan Black Pork Curry (8-12 pax)",
          description: "Sri Lankan Black Pork Curry (8-12 pax) description",
        },
        {
          image: bruleePork,
          title: "Gotu Kola Sambal",
          description: "Gotu Kola Sambal description",
        },
        {
          image: bruleePork,
          title: "Seeni Sambal",
          description: "Seeni Sambal description",
        },
        {
          image: bruleePork,
          title: "Vegetable Sodhi",
          description: "Vegetable Sodhi description",
        },
        {
          image: bruleePork,
          title: "String Hoppers",
          description: "String Hoppers description",
        },
        {
          image: bruleePork,
          title: "Spiced Basmati Rice",
          description: "Slow Rpiced Basmati Rice description",
        },
      ],
      desserts: [
        {
          image: bruleePork,
          title: "Saffron Kulfi",
          description: "Saffron Kulfi description",
        },
      ],
    },
  };
  render() {
    return (
      <div className="row justify-content-center">
        <h1>{this.props.menu}</h1>
        <p className="col-lg-10 col-12">
          {this.pastMenuDict[this.props.menu].description}
        </p>
        <div className="align-center background">
          <h1 className="section-header">Starters</h1>
          <p className="col-lg-10 col-12">
            The starters for this menu, the starters are served on a shared
            plate for all to indulge in.
          </p>
          <Carousel interval={null} className="col-lg-8 col-12">
            {this.pastMenuDict[this.props.menu].starters.map((starter) => (
              <Carousel.Item key={starter.title}>
                <div
                  className="past-menu car-item"
                  style={{ backgroundImage: `url(${starter.image})` }}
                ></div>
                <Carousel.Caption>
                  <div className="past-menu-caption">
                    <h3>{starter.title}</h3>
                    <p>{starter.description}</p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="align-center">
          <h1 className="section-header">Mains</h1>
          <p className="col-lg-10 col-12">
            For large groups (8-12pax) we will have additional main served as
            indicated on the main with "(8-12pax)" in the title.
          </p>
          <Carousel interval={null} className="col-lg-8 col-12">
            {this.pastMenuDict[this.props.menu].mains.map((main) => (
              <Carousel.Item key={main.title}>
                <div
                  className="past-menu car-item"
                  style={{ backgroundImage: `url(${main.image})` }}
                ></div>
                <Carousel.Caption>
                  <div className="past-menu-caption">
                    <h3>{main.title}</h3>
                    <p>{main.description}</p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="align-center background">
          <h1 className="section-header">Dessert</h1>
          <p className="col-lg-10 col-12">
            There is only one dessert choice to round of the meal.
          </p>
          <div
            className="past-menu car-item dessert-container col-lg-8 col-12"
            style={{
              backgroundImage: `url(${
                this.pastMenuDict[this.props.menu].desserts[0].image
              })`,
            }}
          >
            <div className="past-menu-caption dessert-caption">
              <h3>{this.pastMenuDict[this.props.menu].desserts[0].title}</h3>
              <p>
                {this.pastMenuDict[this.props.menu].desserts[0].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PastMenu;
