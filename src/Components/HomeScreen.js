import React from "react";

const randomNumber = (limit) => {
  return Math.floor(Math.random() * limit);
};

const imageList = [
  "https://www.dropbox.com/s/ywqirn2y2iclg01/928-Laksa.jpg?raw=1",
  "https://www.dropbox.com/s/rf563hls76zp124/Maruhachi.JPG?raw=1",
  "https://www.dropbox.com/s/kde2jm2ezrbkxd8/Maries-Lapis.JPG?raw=1",
  "https://www.dropbox.com/s/cs1f3yg0dkh93z5/Percolate.JPG?raw=1",
];

export default class HomeScreen extends React.Component {
  getRandomImage = (arr) => {
    const select = randomNumber(arr.length);
    return arr[select];
  };

  render() {
    const randomImage = this.getRandomImage(imageList);
    return (
      <div className="screen" id="home">
        <div className="header">
          <h1>Makan Where</h1>
          <h4>By @markan.sg</h4>
        </div>
        <img src={randomImage} alt="Food pic from @markan.sg!" />
        <button onClick={this.props.handleNext}>
          Tap for a recommendation
        </button>
      </div>
    );
  }
}
