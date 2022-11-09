import React from "react";
import "../Components/Game.css"
import Header from "./Header";
import Menu from "../Components/Menu";
import Card from "../Components/Card";
import Overlay from "../Components/Overlay";
import { makeDeck } from "../helpers";
import ChristmasMP3 from "../Sound/christmasmedley.mp3";
import Timer from "../Components/Timer";
import {Link} from "react-router-dom"

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      difficulty: "",
      moves: 0,
      cardOne: null,
      cardTwo: null,
      disabled: false,
      cards: [],
      gameOver: false,
    };
    this.setDifficulty = this.setDifficulty.bind(this);
  }

  timerMethod = (property, value) => {
    this.setState(
      {
        [property]: value,
      },
      () => console.log(this.state.gameOver)
    );
  };

  // shuffleCards = () => {
  //   const numberOfCards = gameMode[this.state.difficulty].numCards;
  //   console.log(this.state.difficulty);
  //   const randomCards = [];
  //   const listIndex = [];

  //   while (randomCards.length < numberOfCards) {
  //     const random = Math.floor(Math.random() * cardImgs.length);

  //     if (listIndex.includes(random)) {
  //       continue;
  //     }
  //     listIndex.push(random);

  //     Need pairs of the same card to match in the game
  //     randomCards.push({
  //       id: Math.random(),
  //       matched: false,
  //       ...cardImgs[random],
  //     });
  //     randomCards.push({
  //       id: Math.random(),
  //       matched: false,
  //       ...cardImgs[random],
  //     });
  //   }
  //   randomCards.sort((a, b) => a.id - b.id);
  //   this.setState({
  //     cards: randomCards,
  //   });
  // };

  componentDidUpdate() {
    console.log(this.hasWon);
    if (this.state.gameOver === false) {
      if (this.hasWon) {
        this.setState(
          {
            gameOver: true,
          },
          () => console.log(this.state.gameOver)
        );
      }
    }
  }
  // If Cards do not match, turn back the cards and moves++

  resetTurn = () => {
    this.setState({
      cardOne: null,
      cardTwo: null,
      moves: this.state.moves + 1,
      disabled: false,
    });
  };

  evaluateMatch = () => {
    if (this.state.cardOne.img === this.state.cardTwo.img) {
      console.log(this.state.cardOne.id);
      console.log(this.state.cardTwo.id);
      let cardOne = { ...this.state.cardOne, matched: true };
      console.log(cardOne);
      let indexOne = this.state.cards.findIndex(
        (card) => card.id === this.state.cardOne.id
      );
      console.log(indexOne);
      let cardTwo = { ...this.state.cardTwo, matched: true };
      console.log(cardTwo);
      let indexTwo = this.state.cards.findIndex(
        (card) => card.id === this.state.cardTwo.id
      );
      console.log(indexTwo);
      console.log(this.state.cards);
      this.state.cards.splice(indexOne, 1, cardOne);
      this.state.cards.splice(indexTwo, 1, cardTwo);
      this.setState({
        cards: this.state.cards,
        cardOne: null,
        cardTwo: null,
      });
    } else {
      this.timerID = setTimeout(() => {
        this.resetTurn();
      }, 1000);
    }
  };

  isFlipped = (card) => {
    return (
      card.id === this.state.cardOne?.id ||
      card.id === this.state.cardTwo?.id ||
      card.matched
    );
  };

  handleClick = (card) => {
    if (this.state.cardOne) {
      console.log(this.state.cardOne);
      if (card.id !== this.state.cardOne.id) {
        this.setState(
          {
            cardTwo: card,
          },
          () => {
            this.evaluateMatch();
          }
        );
      }
    } else {
      this.setState(
        {
          cardOne: card,
        },
        () => console.log(this.state.cardOne)
      );
    }
  };
  
  handleBackToMenu = () => {
    // If every card matches:
    // 1. Check to see if there's any objects/items in the localStorage
    // 2. if it does, you getItem from localStorage, unstringify, parse it, and you push the new Game into the existing set of array
    // 3. if it doesn't, you stringify a new object and add it into the local storage.

    if (this.state.cards.every((card) => card.matched)) {
      let previous = localStorage.getItem("storeGames");
      previous = JSON.parse(previous);
      if (previous && previous.length > 0) {
        let Game = {
          difficulty: this.state.difficulty,
          moves: this.state.moves,
        };
        previous.push(Game);
        console.log(previous);
        let storeGames = JSON.stringify(previous);
        localStorage.setItem("storeGames", storeGames);
      } else {
        let Game = [
          {
            difficulty: this.state.difficulty,
            moves: this.state.moves,
          },
        ];
        let storeGames = JSON.stringify([...Game]);
        localStorage.setItem("storeGames", storeGames);
        console.log(storeGames);
      }
    }
    // Reset State
    this.setState({
      cards: [],
      difficulty: "",
      moves: 0,
    });
  };

  setDifficulty(getDifficulty) {
    this.setState({
      difficulty: getDifficulty,
      cards: makeDeck(getDifficulty),
    });;
  }


  render() {
    this.hasWon = this.state.cards.length
      ? this.state.cards.every((card) => card.matched)
      : false;

    return (
      <>
        <Header />
        <div>
          {/* <audio controls="controls" src={ChristmasMP3} autoPlay="autoplay" /> */}
        </div>
        <main>
          {!this.state.difficulty && <Menu onClick={this.setDifficulty} />}

          {this.state.difficulty && (
            <>
              <div className={`card-grid ${this.state.difficulty}`}>
                <div className="moves">Moves: {this.state.moves}</div>
                <Timer
                  difficulty={this.state.difficulty}
                  timerMethod={this.timerMethod}
                  hasWon={this.hasWon}
                />
                <button onClick={this.handleBackToMenu}>Back To Menu</button>
                {this.state.cards.map((card) => (
                  <Card
                    key={card.id}
                    card={card}
                    flipped={this.isFlipped(card)}
                    disabled={this.state.disabled}
                    handleClick={this.handleClick}
                  />
                ))}
              </div>
            </>
          )}
        </main>
        {this.hasWon && <Overlay backToMenu={this.handleBackToMenu} />}
        {!this.state.difficulty && <Link to="leaderboard"><button>Leaderboard</button></Link>}
      </>
    );
  }
}

export default Game;
