import "./App.css";
import NavLinks from "./components/nav-links";

const Welcome = () => {
  return (
    <>
      <div className="container" id="homepage">
        <div className="wrapper">
          <div className="home-title-1">Welcome to</div>
          <div className="home-title-2">Scales for Dummies Like Me</div>
          <NavLinks />
        </div>
      </div>
    </>
  );
};

export default Welcome;
