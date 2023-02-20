import React from "react";
import "./App.css";
import Tiles from "./Components/Tiles";
import Button from "react-bootstrap/Button";
import RulesModal from "./Components/Modal";

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Button variant="dark" onClick={() => setModalShow(true)}>
          ?
        </Button>
        <h1>WAFFLE</h1>
        <Tiles />
      </header>

      <RulesModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default App;
