import React from "react";
import Letter from "./Letter";
import { waffles } from "../Waffles";

export default class Tiles extends React.Component {
  constructor(props) {
    super(props);

    const todaysWaffle = waffles[0]; //// Hard-coded for now, to be replaced by random selection of waffle from a longer list of waffles

    this.state = {
      waffle: [...todaysWaffle], // copy to update throughout the game
      pairToSwop: [],
    };
  }

  handleClick = (e) => {
    if (this.state.pairToSwop.length < 2) {
      this.setState(
        {
          pairToSwop: [...this.state.pairToSwop, e.target.id],
        },
        () => this.swopLetters(this.state.pairToSwop)
      );
    }
  };

  swopLetters = (pairIdArr) => {
    if (pairIdArr.length === 2) {
      if (pairIdArr[0] === pairIdArr[1]) {
        this.setState({ pairToSwop: [] });
        return;
      }
      const updatedWaffle = [...this.state.waffle];
      const [tile1, tile2] = updatedWaffle.filter((tile) =>
        pairIdArr.includes(tile.id)
      );
      let coord1 = tile1.currCoord;
      let coord2 = tile2.currCoord;
      tile1.currCoord = coord2;
      tile2.currCoord = coord1;
      this.setState({ waffle: updatedWaffle, pairToSwop: [] });
    }
  };

  render() {
    const sortedTiles = this.state.waffle.sort(
      (a, b) => a.currCoord - b.currCoord
    );

    const tilesDisplay = sortedTiles.map((tileObj) => (
      <div key={tileObj.id} onClick={this.handleClick}>
        <Letter
          {...tileObj}
          // customClickEvent={this.handleClick}
        />
      </div>
    ));

    return <div id="grid">{tilesDisplay}</div>;
  }
}
