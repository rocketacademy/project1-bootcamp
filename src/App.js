import React from "react";
import "./App.css";
import HomePage from "./pages/Homepage/homepage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HomePage 
          backgroundImage="https://img.us.news.samsung.com/us/wp-content/uploads/2018/01/14112220/180108_FH_AKG-Speaker_Full-Shot_w_homescreen_rgb_04.jpg"
          title="What's left in your fridge today?"
          buttonText="Let's take a look!"
        />
      </div>
    );
  }
}

export default App;
