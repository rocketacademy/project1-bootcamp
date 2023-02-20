import { palette } from "../Palette.js";
import { waffleStr } from "./waffle-finder.js";

export const makeSolutionWaffle = () => {
  return makeWaffle(waffleStr);
};

export const makeRandomWaffle = () => {
  const randomWaffle = makeWaffle(waffleStr);

  preScramble(randomWaffle);

  return randomWaffle;
};

function makeWaffle(str) {
  const waffle = [];
  for (let i = 0; i < str.length; i++) {
    let rowNum = Math.floor(i / 5);
    let colNum = i % 5;
    const tile = {
      id: `${rowNum}${colNum}`,
      letter: str[i],
      currCoord: `${rowNum}${colNum}`,
      color: str[i] === " " ? palette.background : palette.grey,
    };
    waffle.push(tile);
  }
  return waffle;
}

// Holes are indexed 6, 8, 16, and 18 and are not available for swops
// Nodes are indexed 0, 4, 12, 20, and 24 and are not to be pre-scrambled
const indicesToScramble = [
  1, 2, 3, 5, 7, 9, 10, 11, 13, 14, 15, 17, 19, 21, 22, 23,
];

function preScramble(waffle) {
  while (tilesLeftToScramble(waffle)) {
    const shuffledIndices = indicesToScramble.sort(() => 0.5 - Math.random());
    let letter1 = waffle[shuffledIndices[0]];
    let letter2 = waffle[shuffledIndices[1]];
    let coord1 = letter1.currCoord;
    let coord2 = letter2.currCoord;
    letter1.currCoord = coord2;
    letter2.currCoord = coord1;
  }
}

function tilesLeftToScramble(waffle) {
  return indicesToScramble.some(
    (index) => waffle[index].id === waffle[index].currCoord
  );
}
