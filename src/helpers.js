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

function shuffleCards(deck) {
  let currentIndex = 0;
  while (currentIndex < deck.length) {
    let randomIndex = Math.floor(Math.random() * deck.length);
    let a = deck[randomIndex];
    let b = deck[currentIndex];
    [a, b] = [b, a];
    deck[currentIndex] = b;
    deck[randomIndex] = a;
    currentIndex++;
  }
  return deck;
}

export function makeDeck(difficulty) {
  let deck = [];
  for (let i = 0; i < pokemonNames.length; i++) {
    deck.push({
      id: i,
      matched: false,
      img: `/PokemonPics/${pokemonNames[i]}.png`,
    });
  }
  shuffleCards(deck);
  console.log("Deck: ", deck);
  let newDeck = deck.slice(-1 * (gameMode[difficulty].numCards / 2));
  console.log(newDeck);
  // duplicate array
  let duplicatedDeck = [];
  for (let j = 0; j < gameMode[difficulty].numCards; j++) {
    // Deep Clone Array so that it wont reference the same object
    // and produce the same id
    let card = lodash.cloneDeep(newDeck[Math.floor(j / 2)]);
    card.id = j;
    duplicatedDeck.push(card);
  }
  console.log(duplicatedDeck);
  duplicatedDeck = shuffleCards(duplicatedDeck);
  return duplicatedDeck;
}