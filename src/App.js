import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./Components/NavBar/Navbar";
import ModuleForm from "./Components/ModuleForm/ModuleForm";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <ModuleForm />
      </div>
    );
  }
}

export default App;
