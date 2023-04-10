import React from "react";

const randomNumber = (limit) => {
  return Math.floor(Math.random() * limit);
};

const imageList = [
  "https://drive.google.com/uc?export=view&id=1EBcentBVFF8sC0oXPjsGzlsh3brILGhY",
  "https://drive.google.com/uc?export=view&id=1y9rH1FlYHIQ-ME2upPgNZL4NRxM0HIRY",
  "https://drive.google.com/uc?export=view&id=1s2HoSwfjpwrmNXBf9jlgG2_LMa5KnQvo",
  "https://drive.google.com/uc?export=view&id=1jlZ6AiVdc_KydPk6KiEq7IP--Z5LSm41",
  "https://drive.google.com/uc?export=view&id=1OYYgiwrgoeuQtGDlloPtSpd8hyEnPY0t",
  "https://drive.google.com/uc?export=view&id=1e1qRu9pd3Rh7oGcaiM-hxujRpa7wv59R",
  "https://drive.google.com/uc?export=view&id=18Z4ArS_SyhvtsFxCEOxuEr6YVBdorR7g",
];

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select: randomNumber(imageList.length),
    };
  }
  getRandomImage = (number) => {
    return imageList[number];
  };

  render() {
    const randomImage = this.getRandomImage(this.state.select);
    return (
      // <motion.div
      //   animate={{ opacity: 1 }}
      //   initial={{ opacity: 0.1 }}
      //   exit={{ opacity: 0.1 }}
      // >
      <div className="screen" id="home">
        <div className="header">
          <img src="./logos/logo-home.svg" alt="logo" />
          <h4>By @markan.sg</h4>
        </div>
        {/* <img id="logo" src="./logos/icon-blue.svg" alt="logo" /> */}
        <img src={randomImage} alt="Food pic from @markan.sg!" />
        <button onClick={this.props.handleNext}>
          Tap for a recommendation
        </button>
      </div>
    );
  }
}
