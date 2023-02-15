import React from "react";
import Letter from "./Letter";
import { waffles } from "../Waffles";

export default class Tiles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todaysWaffle: waffles[0], //// Hard-coded for now, to be replaced by random selection of waffle
    }; // update todaysWaffle with each swop
  }
  swopLetters = (letter1, letter2) => {
    // If letters 1 and 2 are clicked, swop their currRow and currCol
    // let newWaffle = [...this.state.todaysWaffle]; // replace the changed tile objects
  };

  render() {
    const sortedTiles = this.state.todaysWaffle.sort();

    const tiles = sortedTiles.map((tileObj) => (
      <Letter key={tileObj.id} {...tileObj} /> //Onclick
    ));

    return <div id="grid">{tiles}</div>;
  }
}
