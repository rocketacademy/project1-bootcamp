import React from "react";
import Letter from "./Letter";
import { waffles } from "../Waffles";
import { palette } from "../Palette";

export default class Tiles extends React.Component {
  constructor(props) {
    super(props);

    const todaysWaffle = waffles[0]; //// Hard-coded for now, to be replaced by random selection of waffle from a longer list of waffles

    this.state = {
      waffle: [...todaysWaffle],
      pairToSwop: [],
    };
  }

  componentDidMount() {
    this.updateColor();
  }

  updateColor = () => {
    const updatedWaffle = [...this.state.waffle];
    for (const tile of updatedWaffle) {
      if (tile.currCoord === tile.targetCoord) {
        tile.color = palette.green;
      }
    }
    for (const tile of updatedWaffle) {
      const currentRow = tile.currCoord[0];
      const rowTarget = updatedWaffle.filter(
        (tile) => tile.targetCoord[0] === currentRow
      );
      if (tile.color !== palette.green && rowTarget.includes(tile)) {
        tile.color = palette.yellow;
      }
    }
    this.setState({ waffle: updatedWaffle });
  };

  handleClick = (e) => {
    const tileId = e.target.id;
    const tileColor = this.state.waffle.filter((tile) => tile.id === tileId)[0]
      .color;
    if (tileColor === palette.green) {
      return;
    }
    if (this.state.pairToSwop.length < 2) {
      this.setState(
        {
          pairToSwop: [...this.state.pairToSwop, tileId],
        },
        () => this.swopLetters(this.state.pairToSwop)
      );
    }
  };

  swopLetters = (pairIdArr) => {
    if (pairIdArr.length === 2) {
      if (pairIdArr[0] === pairIdArr[1]) {
        this.setState({ pairToSwop: [] });
        alert("Can't swop a tile with itself!");
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
      this.setState(
        { waffle: updatedWaffle, pairToSwop: [] },
        this.updateColor
      );
    }
  };

  render() {
    const sortedTiles = this.state.waffle.sort(
      (a, b) => a.currCoord - b.currCoord
    );

    const tilesDisplay = sortedTiles.map((tile) => (
      <div key={tile.id} onClick={this.handleClick}>
        <Letter {...tile} />
      </div>
    ));

    return <div id="grid">{tilesDisplay}</div>;
  }
}
