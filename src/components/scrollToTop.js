import MenuIcon5 from "../assets/menu-icons-05.png";

const ScrollToTop = () => {
  return (
    <>
      <div className="back-to-top-button-wrapper">
        <button className="back-to-top-button">
          <a href="#homepage-section">
            <img src={MenuIcon5} alt="" />
          </a>
        </button>
      </div>
    </>
  );
};

export default ScrollToTop;
