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
      swopAnyLetters(randomWaffle);
    }
  }
}

function swopAnyLetters(waffle) {
  const waffleIndices = [...Array(waffle.length).keys()];
  // Holes in the waffle (no letter on the tile) are not to be swopped
  waffleIndices.splice(6, 1);
  waffleIndices.splice(8, 1);
  waffleIndices.splice(16, 1);
  waffleIndices.splice(18, 1);
  const shuffledIndices = waffleIndices.sort(() => 0.5 - Math.random());
  let letter1 = waffle[shuffledIndices[0]];
  let letter2 = waffle[shuffledIndices[1]];
  let coord1 = letter1.currCoord;
  let coord2 = letter2.currCoord;
  letter1.currCoord = coord2;
  letter2.currCoord = coord1;
}

console.log(randomWaffle);
console.log(randomWaffle.length);
