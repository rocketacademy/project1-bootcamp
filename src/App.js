import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Card from "./Components/Card";
import Overlay from "./Components/Overlay";
import { makeDeck } from "./helpers";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      difficulty: "",
      moves: 0,
      cardOne: null,
      cardTwo: null,
      disabled: false,
      cards: [],
    };
    this.setDifficulty = this.setDifficulty.bind(this);
  }

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


  // If Cards do not match, turn back the cards and add moves++
  resetTurn = () => {
    this.setState({
      cardOne: null,
      cardTwo: null,
      moves: this.state.moves + 1,
      disabled: false,
    });
  };

  evaluateMatch = () => {
    if(this.state.cardOne.img === this.state.cardTwo.img) {
          console.log(this.state.cardOne.id)
          console.log(this.state.cardTwo.id)
          let cardOne = {...this.state.cardOne, matched: true}
          console.log(cardOne);
          let indexOne = this.state.cards.findIndex((card) => card.id === this.state.cardOne.id)
          console.log(indexOne);
          let cardTwo = {...this.state.cardTwo, matched: true}
          console.log(cardTwo);
          let indexTwo = this.state.cards.findIndex((card) => card.id === this.state.cardTwo.id)
          console.log(indexTwo);
          console.log(this.state.cards);
          this.state.cards.splice(indexOne, 1, cardOne);
          this.state.cards.splice(indexTwo, 1, cardTwo);
          this.setState({
            cards: this.state.cards,
            cardOne: null,
            cardTwo: null
          })
        } else{
          this.timerID = setTimeout(() => {
            this.resetTurn()
          }, 1000)
        }
  }

  isFlipped = (card) => {
    return (
      card.id === this.state.cardOne?.id ||
      card.id === this.state.cardTwo?.id ||
      card.matched
    );
  };

  handleClick = (card) => {
    if (this.state.cardOne) {
      console.log(this.state.cardOne)
      if (card.id !== this.state.cardOne.id) {
        this.setState({
          cardTwo: card,
        }, () => {this.evaluateMatch()});

      }
    } else {
        this.setState({
          cardOne: card,
      }, () => console.log(this.state.cardOne));
    }
  };


  handleBackToMenu = () => {
    this.setState({
      cards: [],
      difficulty: "",
      moves: 0
    });
  };

  setDifficulty(getDifficulty) {
    this.setState({
      difficulty: getDifficulty,
      cards: makeDeck(getDifficulty),
    });
  }

  render() {
    const hasWon = this.state.cards.length
      ? this.state.cards.every((card) => card.matched)
      : false;
    return (
      <div className="App">
        <Header />
        <main>
          {!this.state.difficulty && <Menu onClick={this.setDifficulty} />}

          {this.state.difficulty && (
            <>
              <div className={`card-grid ${this.state.difficulty}`}>
                <div className="moves">Moves: {this.state.moves}</div>
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
        {hasWon && <Overlay newGame={this.setDifficulty} backToMenu={this.handleBackToMenu}/>}
      </div>
    );
  }
}

export default App;
