import "./first-page.css";

const Welcome = (props) => {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="home-title-1">Welcome to</div>
          <div className="home-title-2">Scales for Dummies Like Me</div>
          <div className="button-1-wrapper">
            <button className="button-1" onClick={() => props.pageNo(2)}>
              Start Learning ♫
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
