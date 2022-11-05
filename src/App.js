import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Menu from "./Components/Menu";   
import Card from "./Components/Card";

const gameMode = {
  easy: { numCards: 12, gridColumns: 4 },
  medium: { numCards: 20, gridColumns: 5 },
  hard: { numCards: 28, gridColumns: 7 },
};

const cardImgs = [
  { src: "/PokemonPics/Bulbasaur.png" },
  { src: "/PokemonPics/Charmander.png" },
  { src: "/PokemonPics/Clefairy.png" },
  { src: "/PokemonPics/Cubone.png" },
  { src: "/PokemonPics/Diglett.png" },
  { src: "/PokemonPics/Ditto.png" },
  { src: "/PokemonPics/Eevee.png" },
  { src: "/PokemonPics/Meowth.png" },
  { src: "/PokemonPics/Pichu.png" },
  { src: "/PokemonPics/Pikachu.png" },
  { src: "/PokemonPics/Psyduck.png" },
  { src: "/PokemonPics/Slowpoke.png" },
  { src: "/PokemonPics/Snorlax.png" },
  { src: "/PokemonPics/Squirtle.png" },
  { src: "/PokemonPics/Totodile.png" },
  { src: "/PokemonPics/Wobbuffet.png" },
];

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
    const hasWon = this.state.cards.length
      ? this.state.cards.every((card) => card.matched)
      : false;
    this.setDifficulty = this.setDifficulty.bind(this);
  }
  
  shuffleCards = () => {
    const numberOfCards = gameMode[this.state.difficulty].numCards;
    console.log(this.state.difficulty)
    const randomCards = [];
    const listIndex = [];

    while (randomCards.length < numberOfCards) {
      const random = Math.floor(Math.random() * cardImgs.length);

      if (listIndex.includes(random)) {
        continue;
      }
      listIndex.push(random);

      // Need pairs of the same card to match in the game
      randomCards.push({
        id: Math.random(),
        matched: false,
        ...cardImgs[random],
      });
      randomCards.push({
        id: Math.random(),
        matched: false,
        ...cardImgs[random],
      });
    }
    randomCards.sort((a, b) => a.id - b.id);
    this.setState({
      cards: randomCards,
    });
  };

  // Loads the game immediately when difficulty is set
  componentDidMount() {
    if (!this.state.difficulty) {
      return;
    } else {
      this.shuffleCards();
    }
  }

  // Reset Turn

  resetTurn = () => {
    this.setState({
      cardOne: null,
      cardTwo: null,
      moves: (prevState) => prevState + 1,
      disabled: false,
    });
  };

  // handleMatches = () => {
  //   if (this.state.cardOne?.src === this.state.cardTwo?.src) {
  //     this.setState(({ cards }) => ({
  //       cards: cards.map((card) => ({
  //         ...card,
  //         matched: true,
  //       })),
  //     }));
  //   }
  // };

  isFlipped = (card) => {
    return (
      card.id === this.state.cardOne?.id ||
      card.id === this.state.cardTwo?.id ||
      card.matched
    );
  };

  handleClick = (card) => {
    if (this.state.cardOne) {
      if (card.id !== this.state.cardOne.id) {
        this.setState(
          {
            cardTwo: card,
          },
          () => console.log(this.state.cardTwo)
        );
      }
    } else {
      this.setState({
        cardOne: card,
      });
    }
  };

  handleBackToMenu = () => {
    this.setState({
      cards: [],
      difficulty: "",
    });
  };

  setDifficulty(getDifficulty) {
    const newDifficulty = getDifficulty;
    this.setState(
      {
        difficulty: newDifficulty,
      },
      () => console.log(this.state.difficulty)
    );
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          {!this.state.difficulty && <Menu onClick={this.setDifficulty} />}

          {this.state.difficulty && (
            <>
              <div className={`card-grid ${this.state.difficulty}`}>
                {console.log(this.state.difficulty)}
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
      </div>
    );
  }
}

export default App;
