import React from "react";
import Letter from "./Letter.js";
// import { waffles } from "../Waffles";
import { palette } from "../Palette.js";
import { makeRandomWaffle } from "../Waffle-maker/waffle-maker";
import {
  row0word,
  row2word,
  row4word,
  col0word,
  col2word,
  col4word,
} from "../Waffle-maker/waffle-finder";

const holes = ["11", "13", "31", "33"];

export default class Tiles extends React.Component {
  constructor(props) {
    super(props);

    const todaysWaffle = makeRandomWaffle();
    const todaysSolution = {
      row0: row0word,
      row2: row2word,
      row4: row4word,
      col0: col0word,
      col2: col2word,
      col4: col4word,
    };
    console.log(todaysSolution);

    this.state = {
      waffle: [...todaysWaffle],
      pairToSwop: [],
      solution: todaysSolution,
      greenTiles: 0,
      swopsLeft: 15,
    };
  }

  componentDidMount() {
    this.updateColor();
  }

  handleClick = (e) => {
    const tileId = e.target.id;
    const tileColor = this.state.waffle.filter((tile) => tile.id === tileId)[0]
      .color;
    if (this.hasWon() || this.hasLost() || tileColor === palette.green) {
      return;
    } else if (this.state.pairToSwop.length < 2) {
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
        {
          waffle: updatedWaffle,
          pairToSwop: [],
          swopsLeft: this.state.swopsLeft - 1,
        },
        this.updateColor
      );
    }
  };

  updateColor = () => {
    this.findGreen([...this.state.waffle]);
  };

  findGreen = (waffle) => {
    const updatedSolution = { ...this.state.solution };
    let greenTilesFound = 0;
    for (const tile of waffle) {
      const location = tile.currCoord;
      const currentRow = location[0];
      const currentCol = location[1];
      const correctLetterAtLocation = waffle.filter(
        (tile) => tile.id === location
      )[0];
      if (tile.color === palette.green || holes.includes(location)) {
        // skip
      } else if (tile.letter === correctLetterAtLocation.letter) {
        tile.color = palette.green;
        greenTilesFound += 1;
        this.removeLetterFromSolution(
          tile,
          currentRow,
          currentCol,
          updatedSolution
        );
      }
    }
    this.setState(
      {
        solution: updatedSolution,
        greenTiles: this.state.greenTiles + greenTilesFound,
      },
      () => this.findYellow(waffle)
    );
  };

  findYellow = (waffle) => {
    const solutionCopy = { ...this.state.solution };
    for (const tile of waffle) {
      const currentRow = tile.currCoord[0];
      const currentCol = tile.currCoord[1];
      const rowSolution =
        currentRow % 2 === 0 ? solutionCopy[`row${currentRow}`] : "";
      const colSolution =
        currentCol % 2 === 0 ? solutionCopy[`col${currentCol}`] : "";
      if (holes.includes(tile.currCoord) || tile.color === palette.green) {
        // skip if tile is a hole, or tile is already green
      } else if (
        rowSolution.includes(tile.letter) ||
        colSolution.includes(tile.letter)
      ) {
        tile.color = palette.yellow;
        this.removeLetterFromSolution(
          tile,
          currentRow,
          currentCol,
          solutionCopy
        );
      } else {
        tile.color = palette.grey;
      }
    }
    this.setState(
      { waffle: waffle },
      this.hasLost() ? this.renderBlackWaffle : () => {}
    );
  };

  removeLetterFromSolution = (tile, row, col, solution) => {
    if (row % 2 === 0) {
      solution[`row${row}`] = solution[`row${row}`].replace(tile.letter, "");
    }
    if (col % 2 === 0) {
      solution[`col${col}`] = solution[`col${col}`].replace(tile.letter, "");
    }
  };

  hasLost = () => {
    return this.state.greenTiles < 21 && this.state.swopsLeft === 0;
  };

  renderBlackWaffle = () => {
    const blackWaffle = [...this.state.waffle];
    if (this.hasLost()) {
      for (const tile of blackWaffle) {
        tile.color = holes.includes(tile.id) ? tile.color : palette.black;
      }
      this.setState({ waffle: blackWaffle });
    }
  };

  hasWon = () => {
    return this.state.greenTiles === 21;
  };

  renderStrawberries = (swopsLeft) => {
    switch (swopsLeft) {
      default:
        return (
          <div className="game-outcome">
            <div>ASTOUNDING!</div>
            <div className="subtitle">Have as many toppings as you like.</div>
            <div>🍓🥭🫐🍒🥜🍫🍌🍑🍨</div>
          </div>
        );
      case 0:
        return (
          <div className="game-outcome">
            <div>THAT WAS CLOSE!</div>
            <div className="subtitle">No strawberries this time.</div>
          </div>
        );
      case 1:
        return (
          <div className="game-outcome">
            <div>GOOD TRY!</div>
            <div className="subtitle">Beat the record next time.</div>
            <div>🍓</div>
          </div>
        );
      case 2:
        return (
          <div className="game-outcome">
            <div>GOOD WORK!</div>
            <div className="subtitle">Keep it up.</div>
            <div>🍓🍓</div>
          </div>
        );
      case 3:
        return (
          <div className="game-outcome">
            <div>AWESOME!</div>
            <div className="subtitle">That was impressive.</div>
            <div>🍓🍓🍓</div>
          </div>
        );
      case 4:
        return (
          <div className="game-outcome">
            <div>AMAZING!</div>
            <div className="subtitle">Close to perfection.</div>
            <div>🍓🍓🍓🍓</div>
          </div>
        );
      case 5:
        return (
          <div className="game-outcome">
            <div>WOW!</div>
            <div className="subtitle">That was the ultimate achievement.</div>
            <div>🍓🍓🍓🍓🍓</div>
          </div>
        );
    }
  };

  render() {
    const sortedTiles = this.state.waffle.sort(
      (a, b) => a.currCoord - b.currCoord
    );

    const tilesDisplay = sortedTiles.map((tile) => (
      <div
        key={tile.id}
        onClick={holes.includes(tile.id) ? () => {} : this.handleClick}
      >
        <Letter {...tile} />
      </div>
    ));

    return (
      <div id="container">
        <div id="grid">{tilesDisplay}</div>
        <div id="swops-left">
          <span>{this.state.swopsLeft}</span> SWOPS REMAINING
        </div>
        {this.hasWon() && this.renderStrawberries(this.state.swopsLeft)}
        {this.hasLost() && <div className="game-outcome">GAME OVER</div>}
      </div>
    );
  }
}
