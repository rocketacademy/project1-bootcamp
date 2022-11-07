import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Card from "./Components/Card";

const lodash = require("lodash");

const gameMode = {
  easy: { numCards: 12, gridColumns: 4 },
  medium: { numCards: 20, gridColumns: 5 },
  hard: { numCards: 28, gridColumns: 7 },
};

const pokemonNames = [
  "Bulbasaur",
  "Charmander",
  "Clefairy",
  "Cubone",
  "Diglett",
  "Ditto",
  "Eevee",
  "Meowth",
  "Pichu",
  "Pikachu",
  "Psyduck",
  "Slowpoke",
  "Snorlax",
  "Squirtle",
  "Totodile",
  "Wobbuffet",
];

function makeDeck (difficulty) {
  let deck = [];
  for(let i=0; i < pokemonNames.length; i++) {
    deck.push({
      id: i,
      matched: false,
      img: `/PokemonPics/${pokemonNames[i]}.png`
    });
  }
  shuffleCards(deck);
  console.log('Deck: ', deck)
  let newDeck = deck.slice(-1 * (gameMode[difficulty].numCards / 2))
  console.log(newDeck);
  // duplicate array
  let duplicatedDeck = [];
    for(let j = 0; j < gameMode[difficulty].numCards; j++){
      // Deep Clone Array so that it wont reference the same object 
      // and produce the same id
      let card = lodash.cloneDeep(newDeck[Math.floor(j/2)])
      card.id = j
      duplicatedDeck.push(card)
    }
  console.log(duplicatedDeck);
  duplicatedDeck = shuffleCards(duplicatedDeck);
  return duplicatedDeck;
}


function shuffleCards(deck){
  let currentIndex = 0;
  while (currentIndex < deck.length) {
    let randomIndex = Math.floor(Math.random() * deck.length);
    let a = deck[randomIndex];
    let b = deck[currentIndex];
    [a, b] = [b, a];
    deck[currentIndex] = b;
    deck[randomIndex] = a;
    currentIndex++
  }
  return deck;
}

// const cardImgs = [
//   { src: "/PokemonPics/Bulbasaur.png" },
//   { src: "/PokemonPics/Charmander.png" },
//   { src: "/PokemonPics/Clefairy.png" },
//   { src: "/PokemonPics/Cubone.png" },
//   { src: "/PokemonPics/Diglett.png" },
//   { src: "/PokemonPics/Ditto.png" },
//   { src: "/PokemonPics/Eevee.png" },
//   { src: "/PokemonPics/Meowth.png" },
//   { src: "/PokemonPics/Pichu.png" },
//   { src: "/PokemonPics/Pikachu.png" },
//   { src: "/PokemonPics/Psyduck.png" },
//   { src: "/PokemonPics/Slowpoke.png" },
//   { src: "/PokemonPics/Snorlax.png" },
//   { src: "/PokemonPics/Squirtle.png" },
//   { src: "/PokemonPics/Totodile.png" },
//   { src: "/PokemonPics/Wobbuffet.png" },
// ];

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

  // Loads the game immediately when difficulty is set
  // componentDidMount() {
  //   if (!this.state.difficulty) {
  //     return;
  //   } else {
  //     this.shuffleCards();
  //   }
  // }


  // If Cards do not match, turn back the cards and add moves++
  resetTurn = () => {
    this.setState({
      cardOne: null,
      cardTwo: null,
      moves: this.state.moves + 1,
      disabled: false,
    });
  };

  // handleMatches = () => {
  //   if (this.state.cardOne?.img === this.state.cardTwo?.img) {
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
      console.log(this.state.cardOne)
      if (card.id !== this.state.cardOne.id) {
        this.setState({
          cardTwo: card,
        }, () => {if(this.state.cardOne.img === this.state.cardTwo.img) {
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
      });

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
      </div>
    );
  }
}

export default App;
