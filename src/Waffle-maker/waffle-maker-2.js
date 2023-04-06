import { indexedWords } from "./indexed-words.js";
import { words } from "./words.js";
import { palette } from "../Palette.js";

//// The following code was used to write the file containing 313 waffles:
// import fs from "fs";
// fs.writeFile("./daily-waffles-2023.js", makeDailyWaffles(), (err) => {
//   if (err) {
//     console.error(err);
//   }
// });

export const makeDailyWaffles = () => {
  const dailyWaffles = [];
  for (let i = 0; i < 313; i++) {
    dailyWaffles.push(makeOneWaffle());
  }
  return JSON.stringify(dailyWaffles);
};

export const makeOneWaffle = () => {
  const solutionWords = generateSolutionWords(words);
  const solutionStr = generateSolutionStr(solutionWords);
  const solutionWaffle = makeWaffleBoard(solutionStr);
  const scrambledWaffle = preScramble([...solutionWaffle]);
  const waffleMix = {
    waffle: scrambledWaffle,
    solutionWaffle: solutionWaffle,
    solutionWords: solutionWords,
  };
  return waffleMix;
};

// Waffle making functions
function generateSolutionWords(wordArr) {
  const [row0word, row2word, row4word, col0word, col2word, col4word] =
    findWords(getRandomWord(wordArr));
  return {
    row0: row0word,
    row2: row2word,
    row4: row4word,
    col0: col0word,
    col2: col2word,
    col4: col4word,
  };
}

function generateSolutionStr(solutionWords) {
  return `${solutionWords.row0}${solutionWords.col0[1]} ${solutionWords.col2[1]} ${solutionWords.col4[1]}${solutionWords.row2}${solutionWords.col0[3]} ${solutionWords.col2[3]} ${solutionWords.col4[3]}${solutionWords.row4}`;
}

function makeWaffleBoard(solutionStr) {
  const waffle = [];
  for (let i = 0; i < solutionStr.length; i++) {
    let rowNum = Math.floor(i / 5);
    let colNum = i % 5;
    const tile = {
      id: `${rowNum}${colNum}`,
      letter: solutionStr[i],
      currCoord: `${rowNum}${colNum}`,
      color: solutionStr[i] === " " ? palette.background : palette.grey,
    };
    waffle.push(tile);
  }
  return waffle;
}

function preScramble(waffle) {
  while (areThereUnscrambledTiles(waffle)) {
    const shuffledIndices = getSwoppableIndices().sort(
      () => 0.5 - Math.random()
    );
    let letter1 = waffle[shuffledIndices[0]];
    let letter2 = waffle[shuffledIndices[1]];
    let coord1 = letter1.currCoord;
    let coord2 = letter2.currCoord;
    letter1.currCoord = coord2;
    letter2.currCoord = coord1;
  }
  return waffle;
}

// Helper functions for waffle making functions
function getRandomWord(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function findWords(row0word) {
  let row2word = "";
  let row4word = "";
  let col0word = "";
  let col2word = "";
  let col4word = "";
  while (
    !row2word ||
    !row4word ||
    [...new Set([row0word, row2word, row4word, col0word, col2word, col4word])]
      .length < 6
  ) {
    col0word = getRandomWord([...indexedWords[row0word[0]]]);
    col2word = getRandomWord([...indexedWords[row0word[2]]]);
    col4word = getRandomWord([...indexedWords[row0word[4]]]);
    row2word = findMatchingWord(col0word[2], col2word[2], col4word[2]);
    row4word = findMatchingWord(col0word[4], col2word[4], col4word[4]);
  }

  return [row0word, row2word, row4word, col0word, col2word, col4word].map(
    (word) => word.toUpperCase()
  );
}

function findMatchingWord(firstLetter, middleLetter, lastLetter) {
  let match = "";
  const matches = [];
  for (const word of indexedWords[firstLetter]) {
    if (word[2] === middleLetter && word[4] === lastLetter) {
      matches.push(word);
    }
  }
  if (matches.length) {
    match = getRandomWord(matches);
  }
  return match;
}

function getSwoppableIndices() {
  // Holes are indexed 6, 8, 16, and 18 and are not available for swops, ever!
  // Nodes are indexed 0, 4, 12, 20, and 24 and are not to be pre-scrambled
  return [1, 2, 3, 5, 7, 9, 10, 11, 13, 14, 15, 17, 19, 21, 22, 23];
}

function areThereUnscrambledTiles(waffle) {
  return getSwoppableIndices().some(
    (index) => waffle[index].id === waffle[index].currCoord
  );
}
