import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/homepage";
import Ingredients from "./pages/Ingredients/ingredientsPage";
import Recipes from "./pages/Recipes/recipes"
import Navbar from "./components/navbar";

class App extends React.Component {
  render() {
    const Error = () => {
      return <h1>Oops! Page not found!</h1>;
    };
    return (
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route element={Error} />
        </Routes>
      </main>
    );
  }
}

export default App;

/*
<HomePage 
          backgroundImage="https://img.us.news.samsung.com/us/wp-content/uploads/2018/01/14112220/180108_FH_AKG-Speaker_Full-Shot_w_homescreen_rgb_04.jpg"
          title="What's left in your fridge today?"
          buttonText="Let's take a look!"
        />

*/
