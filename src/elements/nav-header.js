import "./nav-header.css";
import NavMenu from "./nav-menu";

const NavHeader = (props) => {
  return (
    <>
      <div className="nav-header-wrapper">
        {/* <button onClick={() => props.NavMenu()}>2</button> */}
        <h3>Scales for Dummies Like Me</h3>
      </div>
    </>
  );
};

export default NavHeader;
