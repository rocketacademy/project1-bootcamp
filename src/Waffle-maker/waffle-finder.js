import { indexedWords } from "./indexed-words.js";
import { words } from "./words.js";

export let row0word = "";
export let row2word = "";
export let row4word = "";
export let col0word = "";
export let col2word = "";
export let col4word = "";

export const waffleStr = findWaffle(getRandomWord(words));
row0word = waffleStr.slice(0, 5);

function getRandomWord(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function findWaffle(row0word) {
  while (!row2word || !row4word) {
    col0word = getRandomWord([...indexedWords[row0word[0]]]);
    col2word = getRandomWord([...indexedWords[row0word[2]]]);
    col4word = getRandomWord([...indexedWords[row0word[4]]]);
    row2word = findMatchingWord(col0word[2], col2word[2], col4word[2]);
    row4word = findMatchingWord(col0word[4], col2word[4], col4word[4]);
  }

  [row0word, row2word, row4word, col0word, col2word, col4word] = [
    row0word,
    row2word,
    row4word,
    col0word,
    col2word,
    col4word,
  ].map((word) => word.toUpperCase());
  return `${row0word}${col0word[1]} ${col2word[1]} ${col4word[1]}${row2word}${col0word[3]} ${col2word[3]} ${col4word[3]}${row4word}`;
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
