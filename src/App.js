import React from "react";
import logo from "./logo.png";
import "./App.css";

import Hero from "../src/Components/Hero"
import Menu from "../src/Components/Navbar"
import Education from "../src/Components/Education"
import Project from "../src/Components/Project"
import Contact  from "./Components/Contact"; 
import Skills from "./Components/Skills";
import Work from "./Components/WorkExpereince";
import About from "./Components/About";



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu />
          <Hero />
          <About />
          <Education />
          <Skills />
          <Project />
          <Work />
          <Contact />
        </header>
      </div>
    );
  }
}

export default App;
