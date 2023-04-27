import { useState } from "react";
import Settings from "./Settings";
import Fade from "./Fade";
import { randomNumber } from "../utils";

const imageList = [
  "https://i.imgur.com/GFU4Rck.jpg",
  "https://i.imgur.com/7JX5nqm.jpg",
  "https://i.imgur.com/CzmORKO.jpg",
  "https://i.imgur.com/P4dTYzY.jpg",
  "https://i.imgur.com/ciSqZkv.jpg",
  "https://i.imgur.com/YzyslzF.jpg",
  "https://i.imgur.com/hwu8nZ3.jpg",
];

const HomeScreen = (props) => {
  const [select, setSelect] = useState(randomNumber(imageList.length));
  const [navShow, setNavShow] = useState(false);

  const getRandomImage = (number) => {
    return imageList[number];
  };

  const handleClick = () => {
    setNavShow((state) => !state);
  };

  const randomImage = getRandomImage(select);
  return (
    <Fade className="screen" idName="home">
      <div className="header">
        <img id="long-logo" src="./logos/logo-black-wide.svg" alt="logo" />
        <img id="stacked-logo" src="./logos/logo-home.svg" alt="logo" />
        <h4>By @markan.sg</h4>
      </div>
      <div className="hero-image">
        <img src={randomImage} alt="Food pic from @markan.sg!" />
        <img id="logo" src="./logos/icon-blue.svg" alt="logo" />
      </div>
      <div className="footer">
        <button onClick={props.handleNext}>Tap for a recommendation</button>
        <button id="settings" onClick={handleClick}>
          <img src="./icons/filter.svg" alt="logo" />
        </button>
      </div>
      <Settings
        navShow={navShow}
        settings={props.settings}
        handleUpdate={props.handleUpdate}
      />
    </Fade>
  );
};

export default HomeScreen;
