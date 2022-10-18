import "./App.css";
import { useRef } from "react";

const Welcome = () => {


  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="home-title-1">Welcome to</div>
          <div className="home-title-2">Scales for Dummies Like Me</div>
          <div className="button-1-wrapper">
            <button className="button-1" onClick={handleClick}>
              <img src={require(`../src/assets/menu-icons-02.png`)} alt="" />
            </button>
            <button className="button-1" onClick={handleClick}>
              <img src={require(`../src/assets/menu-icons-03.png`)} alt="" />
            </button>
            <button className="button-1" onClick={handleClick}>
              <img src={require(`../src/assets/menu-icons-01.png`)} alt="" />
            </button>
            <button className="button-1" onClick={handleClick}>
              <img src={require(`../src/assets/menu-icons-04.png`)} alt="" />
            </button>
          </div>
          <div ref={ref}>Some content here</div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
