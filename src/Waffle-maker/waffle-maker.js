import { palette } from "../Palette.js";
import { waffleStr } from "./waffle-finder.js";

export const makeRandomWaffle = () => {
  const randomWaffle = makeWaffle(waffleStr);
  for (let i = 0; i < 10; i++) {
    swopAnyTwoLetters(randomWaffle);
  }
  return randomWaffle;
};

function makeWaffle(str) {
  const waffle = [];
  const letterCount = countLettersInWaffle(str);
  const repeatedLetters = Object.keys(letterCount).filter(
    (key) => key !== " " && letterCount[key] > 1
  );
  const sharedCoordinates = {};
  // first pass: assign unique target coordinates & collect shared target coordinates
  for (let i = 0; i < str.length; i++) {
    let rowNum = Math.floor(i / 5);
    let colNum = i % 5;
    waffle.push({
      id: `${rowNum}${colNum}`,
      letter: str[i],
      currCoord: `${rowNum}${colNum}`,
      targetCoord: [`${rowNum}${colNum}`],
      color: str[i] === " " ? palette.background : palette.grey,
    });

    if (repeatedLetters.includes(str[i])) {
      sharedCoordinates[str[i]] = sharedCoordinates[str[i]]
        ? [...sharedCoordinates[str[i]], `${rowNum}${colNum}`]
        : [`${rowNum}${colNum}`];
    }
  }
  // second pass: update waffle with the shared target coordinates
  for (const item of waffle) {
    if (repeatedLetters.includes(item.letter)) {
      item.targetCoord = sharedCoordinates[item.letter];
    }
  }

  return waffle;
}

function swopAnyTwoLetters(waffle) {
  // Holes are indexed 6, 8, 11, and 18 and are not available for swops
  const waffleIndices = [
    0, 1, 2, 3, 4, 5, 7, 9, 10, 11, 12, 13, 14, 15, 17, 19, 20, 21, 22, 23, 24,
  ];
  const shuffledIndices = waffleIndices.sort(() => 0.5 - Math.random());
  let letter1 = waffle[shuffledIndices[0]];
  let letter2 = waffle[shuffledIndices[1]];
  let coord1 = letter1.currCoord;
  let coord2 = letter2.currCoord;
  letter1.currCoord = coord2;
  letter2.currCoord = coord1;
}

function countLettersInWaffle(waffleStr) {
  const letterCount = {};
  for (let letter of waffleStr) {
    letterCount[letter] = letterCount[letter] ? letterCount[letter] + 1 : 1;
  }
  return letterCount;
}
