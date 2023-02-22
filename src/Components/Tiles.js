import React from "react";
import Letter from "./Letter.js";
import { palette } from "../Palette.js";
import { dailyWaffles } from "../Waffle-maker/daily-waffles-2023.js";
import { makeOneWaffle } from "../Waffle-maker/waffle-maker-2.js";
import { dictionary } from "../Waffle-maker/definitions.js";
import { Button } from "react-bootstrap";

export const holes = ["11", "13", "31", "33"];
let dailyWaffleState; // This variable keeps track of the last state under Daily Mode, when user toggles between Unlimted and Daily

export default class Tiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyMode: true,
      date: new Date().toLocaleDateString(),
      waffle: dailyWaffles[this.getTodaysWaffleIndex()].waffle,
      solutionWords: dailyWaffles[this.getTodaysWaffleIndex()].solutionWords,
      solutionWaffle: dailyWaffles[this.getTodaysWaffleIndex()].solutionWaffle,
      greenTiles: 0,
      pairToSwop: [],
      swopsLeft: 15,
      showSolution: false,
      definitions: [],
    };
  }

  componentDidMount() {
    const storedState = JSON.parse(localStorage.getItem("dailyState"));
    if (storedState && storedState.date !== this.state.date) {
      this.removeStoredState();
      this.updateColor();
      this.getDefinitions(Object.values(this.state.solutionWords));
    } else if (storedState && this.state.dailyMode) {
      this.setState(
        {
          waffle: storedState.waffle,
          solutionWords: storedState.solutionWords,
          solutionWaffle: storedState.solutionWaffle,
          greenTiles: storedState.greenTiles,
          swopsLeft: storedState.swopsLeft,
          showSolution: storedState.showSolution,
          definitions: storedState.definitions,
        },
        () => {
          this.updateColor();
        }
      );
    } else {
      this.updateColor();
      this.getDefinitions(Object.values(this.state.solutionWords));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.playDaily !== prevProps.playDaily) {
      if (this.props.playDaily) {
        this.setState(dailyWaffleState);
      } else {
        dailyWaffleState = { ...prevState };
        this.playAgain();
      }
    }
  }

  getTodaysWaffleIndex = () => {
    const startDate = new Date("02/20/2023");
    const today = new Date();
    const timePassed = today.getTime() - startDate.getTime();
    const dailyWaffleIndex =
      Math.floor(timePassed / (1000 * 3600 * 24)) % dailyWaffles.length;
    return dailyWaffleIndex;
  };

  renderTiles = (waffle) => {
    const sortedTiles = this.sortTilesByCoords(waffle);
    let tilesDisplay = [];
    tilesDisplay = sortedTiles.map((tile) => (
      <div
        key={tile.id}
        onClick={holes.includes(tile.id) ? () => {} : this.handleClick}
      >
        <Letter {...tile} hasWon={this.hasWon()} />
      </div>
    ));
    return tilesDisplay;
  };

  sortTilesByCoords = (waffle) => {
    const sortedTiles = waffle.sort((a, b) => a.currCoord - b.currCoord);
    return sortedTiles;
  };

  getDefinitions = (solutionWords) => {
    const defs = [];
    for (const word of solutionWords) {
      const definition = dictionary[word.toLowerCase()][0]
        ? dictionary[word.toLowerCase()][0]
        : {};
      defs.push(definition);
    }
    this.setState({ definitions: defs });
  };

  renderDefinitions = (defs) => {
    return defs.map((def, index) => (
      <div className="definition" key={def.word ? def.word : index}>
        <span className="def-word">{def.word ? def.word : null}</span>{" "}
        {def.phonetic ? def.phonetic : null}{" "}
        <span className="def-part-of-speech">
          {def.meanings ? def.meanings[0].partOfSpeech : null}
        </span>{" "}
        {def.meanings ? def.meanings[0].definitions[0].definition : null}
      </div>
    ));
  };

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
    const updatedSolutionWords = { ...this.state.solutionWords };
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
          updatedSolutionWords
        );
      }
    }
    this.setState(
      {
        solutionWords: updatedSolutionWords,
        greenTiles: this.state.greenTiles + greenTilesFound,
      },
      () => this.findYellow(waffle)
    );
  };

  findYellow = (waffle) => {
    const solutionCopy = { ...this.state.solutionWords };
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
      () => {
        if (this.state.dailyMode) {
          this.storeState();
        }
        if (this.hasLost()) {
          this.renderBlackWaffle();
        }
      }
      // this.hasLost() ? this.renderBlackWaffle : this.storeState
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

  showSolution = () => {
    this.setState({ showSolution: true });
  };

  playAgain = () => {
    const newWaffle = makeOneWaffle();
    const updatedState = {
      dailyMode: this.props.playDaily,
      waffle: newWaffle.waffle,
      solutionWords: newWaffle.solutionWords,
      solutionWaffle: newWaffle.solutionWaffle,
      greenTiles: 0,
      pairToSwop: [],
      swopsLeft: 15,
      showSolution: false,
      definitions: [],
    };
    this.setState(updatedState, () => {
      this.updateColor();
      this.getDefinitions(Object.values(this.state.solutionWords));
    });
  };

  renderSolution = () => {
    const solutionDisplay = this.state.solutionWaffle.map((tile) => (
      <div key={"s" + tile.id}>
        <Letter {...tile} />
      </div>
    ));
    return solutionDisplay;
  };

  storeState = () => {
    localStorage.setItem("dailyState", JSON.stringify(this.state));
  };

  removeStoredState = () => {
    localStorage.removeItem("dailyState");
  };

  hasWon = () => {
    return this.state.greenTiles === 21;
  };

  renderToppings = (swopsLeft) => {
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
            <div>GOOD WORK!</div>
            <div className="subtitle">Enjoy your waffle with a strawberry.</div>
            <div>🍓</div>
          </div>
        );
      case 2:
        return (
          <div className="game-outcome">
            <div>GREAT JOB!</div>
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
    return (
      <div id="container">
        {this.props.playDaily && (
          <div id="game-mode">{new Date().toLocaleDateString()}</div>
        )}
        {!this.props.playDaily && <div id="game-mode">ALL-YOU-CAN-EAT</div>}
        <div className="grid">{this.renderTiles(this.state.waffle)}</div>
        <div id="swops-left">
          <span>{this.state.swopsLeft}</span>{" "}
          {this.state.swopsLeft < 2 ? "SWOP" : "SWOPS"} REMAINING
        </div>
        {this.hasWon() && this.renderToppings(this.state.swopsLeft)}
        {this.hasWon() && !this.state.dailyMode && (
          <Button variant="success" onClick={this.playAgain}>
            PLAY AGAIN
          </Button>
        )}
        {this.hasWon() && (
          <div id="definitions">
            {this.renderDefinitions(this.state.definitions)}
          </div>
        )}
        {this.hasLost() && <div className="game-outcome">GAME OVER</div>}
        {this.hasLost() && (
          <div>
            <Button variant="success" onClick={this.showSolution}>
              SHOW SOLUTION
            </Button>
            {!this.state.dailyMode && (
              <Button variant="success" onClick={this.playAgain}>
                PLAY AGAIN
              </Button>
            )}
            {this.state.showSolution && (
              <div className="solution-container">
                <div className="grid" id="solution">
                  {this.renderSolution()}
                </div>
                <div id="definitions">
                  {this.renderDefinitions(this.state.definitions)}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
