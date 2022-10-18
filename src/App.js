import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import About from "./Components/About";
import Education from "./Components/Education";
import Menu from "./Components/Navbar";
import Hero from "./Components/Hero";
import Project from "./Components/Project";
import Work from "./Components/WorkExpereince";
import Contact from "./Components/Contact";
import Skills from "./Components/skills";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu />
          <Hero />
          <About />
          <Education />
          <Skills />
          <Work />
          <Project />
          <Contact />
        </header>
      </div>
    );
  }
}

export default App;
