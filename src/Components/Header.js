import React from "react";
import "./Header.css";

export default class Header extends React.Component {

  render(){
  return (
    <header>
      <div className="center-img">
        <img src="PokemonPics/logo.png" alt="logo" />
      </div>
      <h1 className="slogan">Christmas Edition - Gotta match 'em all!</h1>
    </header>
  );
  }
}
