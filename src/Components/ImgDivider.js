//React Components
import React from "react";

class ImgDivider extends React.Component {
  imgObj = this.props.img;
  render() {
    return (
      <div
        className="col-lg-6 section-img"
        style={{
          backgroundImage: `url(${this.imgObj})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "250px",
        }}
      ></div>
    );
  }
}

export default ImgDivider;
