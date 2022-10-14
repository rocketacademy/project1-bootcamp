import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Contact from "./Components/Contact";
import About from "./Components/About";
import Education from "./Components/Education"
import Menu from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Work from "./Components/WorkExpereince"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentPage: 1
    }
    this.update = this.update.bind(this)
  }

  update = (num) => {
    this.setState({
      currentPage: num
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu/>
          <Hero id="Home" />
          <About id="about" />
          <Education id="education" />
          <Skills id="Skills" />
          <Project id="Projects" />
          <Work id="Work" />
          <Contact id="contact" />
        </header>
      </div>
    );
  }
}

export default App;
