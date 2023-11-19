//React components
import React from "react";
import Carousel from "react-bootstrap/Carousel";

//indochine images
import chickpeaTofuSalad from "../images/indochine/starters/chickpea-tofu-salad.jpg";
import gallopingHorses from "../images/indochine/starters/galloping-horses.jpg";
import grilledNumAnsom from "../images/indochine/starters/grilled-num-ansom.jpg";
import miniBanhMi from "../images/indochine/starters/mini-banh-mi.jpg";

import cauliflowerLaab from "../images/indochine/mains/cauliflower-laab.jpg";
import greenCurryOfFish from "../images/indochine/mains/green-curry-of-fish.jpg";
import PanaengDuckCurry from "../images/indochine/mains/panaeng-duck-curry.jpg";
import saiOuaPorkSausage from "../images/indochine/mains/sai-oua-pork-sausages.jpg";
import shrimpPasteRelish from "../images/indochine/mains/shrimp-paste-relish.jpg";
import lemongrassJasmineRice from "../images/indochine/mains/lemongrass-jasmine-rice.jpg";

import smokedIceCreamWithCakeCroutons from "../images/indochine/smoked-ice-cream-with-cake-croutons.jpg";

//nusantara images
import bandungSiomay from "../images/nusantara/starters/bandung-siomay.jpg";
import nasibal from "../images/nusantara/starters/nasibal.jpg";
import pepesTahuJamur from "../images/nusantara/starters/pepes-tahu-jamur.jpg";
import sotoAyamIstimewa from "../images/nusantara/starters/soto-ayam-istimewa.jpg";

import babiRawon from "../images/nusantara/mains/babi-rawon.jpg";
import bebekBetutu from "../images/nusantara/mains/bebek-betutu.jpg";
import ikanPesmol from "../images/nusantara/mains/ikan-pesmol.jpg";
import nasiLiwet from "../images/nusantara/mains/nasi-liwet.jpg";
import plecingSayur from "../images/nusantara/mains/plecing-sayur.jpg";
import sambalHijau from "../images/nusantara/mains/sambal-hijau.jpg";
import vegetableSodhi from "../images/nusantara/mains/vegetable-sodhi.png";

import notKlepon from "../images/nusantara/not-klepon.jpg";

class PastMenu extends React.Component {
  pastMenuDict = {
    "Indochine Menu": {
      description:
        "Drawing inspirations from all parts of Southeast Asia, this menu features some familiar dishes from our past menu as well as a new star of the evening, our very own Panaeng Duck Curry.",
      starters: [
        {
          image: gallopingHorses,
          title: "Galloping Horses",
          description: "Galloping Horses description",
        },
        {
          image: miniBanhMi,
          title: "Mini Banh Mi",
          description: "Mini Banh Mi description",
        },
        {
          image: grilledNumAnsom,
          title: "Grilled Num Ansom",
          description: "Grilled Num Ansom description",
        },
        {
          image: chickpeaTofuSalad,
          title: "Chickpea Tofu Salad",
          description: "Chickpea Tofu Salad description",
        },
      ],
      mains: [
        {
          image: PanaengDuckCurry,
          title: "Panaeng Duck Curry",
          description: "Panaeng Duck Curry description",
        },
        {
          image: saiOuaPorkSausage,
          title: "Sai Oua Pork Sausages",
          description: "Sai Oua Pork Sausages description",
        },
        {
          image: greenCurryOfFish,
          title: "Green Curry of Fish (8-12 pax)",
          description: "Green Curry of Fish (8-12 pax) description",
        },
        {
          image: cauliflowerLaab,
          title: "Cauliflower Laab",
          description: "Cauliflower Laab description",
        },
        {
          image: shrimpPasteRelish,
          title: "Shrimp Paste Relish",
          description: "Shrimp Paste Relish description",
        },
        {
          image: lemongrassJasmineRice,
          title: "Lemongrass Jasmine Rice",
          description: "Lemongrass Jasmine Rice description",
        },
      ],
      desserts: [
        {
          image: smokedIceCreamWithCakeCroutons,
          title: "Smoked Coconut Ice Cream with Cake Croutons",
          description:
            "Smoked Coconut Ice Cream with Cake Croutons description",
        },
      ],
    },
    "Nusantara Menu": {
      description:
        "From the south of Asia, we explore some lesser eaten foods in Singapore. The aromatic spices and flavours of this menu are top notch!",
      starters: [
        {
          image: bandungSiomay,
          title: "Bandun Siomay",
          description: "Bandun Siomay description",
        },
        {
          image: pepesTahuJamur,
          title: "Pepes Tahu Jamur",
          description: "Pepes Tahu Jamur description",
        },
        {
          image: nasibal,
          title: "Nasibal",
          description: "Nasibal description",
        },
        {
          image: sotoAyamIstimewa,
          title: "Soto Ayam Istimewa",
          description: "Soto Ayam Istimewa description",
        },
      ],
      mains: [
        {
          image: bebekBetutu,
          title: "Bebek Betutu",
          description: "Bebek Betutu description",
        },
        {
          image: ikanPesmol,
          title: "Ikan Pesmol",
          description: "Ikan Pesmol description",
        },
        {
          image: babiRawon,
          title: "Babi Rawon (8-12 pax)",
          description: "Babi Rawon (8-12 pax) description",
        },
        {
          image: plecingSayur,
          title: "Plecing Sayur",
          description: "Plecing Sayur description",
        },
        {
          image: sambalHijau,
          title: "Sambal Hijau",
          description: "Sambal Hijau description",
        },
        {
          image: vegetableSodhi,
          title: "Vegetable Sodhi",
          description: "Vegetable Sodhi description",
        },
        {
          image: nasiLiwet,
          title: "Nasi Liwet",
          description: "Nasi Liwet description",
        },
      ],
      desserts: [
        {
          image: notKlepon,
          title: "Not Klepon",
          description: "Not Klepon description",
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
