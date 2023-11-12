import React from "react";
import "./App.css";
import ItemsList from "./Components/ItemsList";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Stack gap={2}>
            <div className="header">Today's shopping list</div>
            <div className="ItemsList">
              <ItemsList />
            </div>
          </Stack>
        </Container>
      </div>
    );
  }
}

export default App;
