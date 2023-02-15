import { findWaffle } from "./waffle-finder.js";
import { getRandomWord } from "./waffle-finder.js";
import { words } from "./words.js";
import { palette } from "../Palette.js";

export const randomWaffle = [];

while (randomWaffle.length < 1) {
  const waffleStr = findWaffle(getRandomWord(words));
  if (waffleStr) {
    for (let i = 0; i < waffleStr.length; i++) {
      let rowNum = Math.floor(i / 5);
      let colNum = i % 5;
      randomWaffle.push({
        id: `${rowNum}${colNum}`,
        letter: waffleStr[i].toUpperCase(),
        currCoord: `${rowNum}${colNum}`,
        targetCoord: `${rowNum}${colNum}`,
        color: waffleStr[i] === " " ? palette.background : palette.grey,
      });
    }
    for (let i = 0; i < 10; i++) {
      swopAnyTwoLetters(randomWaffle);
    }
  }
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
