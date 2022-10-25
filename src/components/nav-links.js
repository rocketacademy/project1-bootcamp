import MenuIcon1 from "../assets/menu-icons-02.png";
import MenuIcon2 from "../assets/menu-icons-03.png";
import MenuIcon3 from "../assets/menu-icons-01.png";
import MenuIcon4 from "../assets/menu-icons-04.png";

const NavLinks = () => {
  return (
    <>
      <div className="button-1-wrapper">
        <button className="button-1">
          <a href="#basics-section">
            <img src={MenuIcon1} alt="" />
          </a>
        </button>
        <button className="button-1">
          <a href="#intervals-section">
            <img src={MenuIcon2} alt="" />
          </a>
        </button>
        <button className="button-1">
          <a href="#major-scales-section">
            <img src={MenuIcon3} alt="" />
          </a>
        </button>
        <button className="button-1">
          <a href="#circle-of-fifths-section">
            <img src={MenuIcon4} alt="" />
          </a>
        </button>
      </div>
    </>
  );
};

export default NavLinks;
