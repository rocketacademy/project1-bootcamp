import React from "react";
import "./App.css";
import Tiles from "./Components/Tiles.js";
import Button from "react-bootstrap/Button";
import RulesModal from "./Components/Modal.js";
import Menu from "./Components/Offcanvas";
import menuIcon from "./Components/images/menu-96.png";
import helpIcon from "./Components/images/question-mark-79.png";

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const [offcanvasShow, setOffcanvasShow] = React.useState(false);
  const [playDaily, togglePlayDaily] = React.useState(true);

  function handleClick(e) {
    if (e.target.id === "daily") {
      togglePlayDaily(true);
      setOffcanvasShow(false);
    } else if (e.target.id === "buffet") {
      togglePlayDaily(false);
      setOffcanvasShow(false);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <div id="buttons-container">
          <Button variant="dark" onClick={() => setOffcanvasShow(true)}>
            <img src={menuIcon} alt="Menu" />
          </Button>
          <Button variant="dark" onClick={() => setModalShow(true)}>
            <img src={helpIcon} alt="Menu" />
          </Button>
        </div>
        <h1>WAFFLE</h1>
        <Tiles playDaily={playDaily} />
      </header>
      <Menu
        show={offcanvasShow}
        onHide={() => setOffcanvasShow(false)}
        onClick={handleClick}
      />
      <RulesModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default App;
