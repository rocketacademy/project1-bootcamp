import { indexedWords } from "./indexed-words.js";

export const findWaffle = (row1) => {
  let col1 = getRandomWord([...indexedWords[row1[0]]]);
  let col2 = getRandomWord([...indexedWords[row1[2]]]);
  let col3 = getRandomWord([...indexedWords[row1[4]]]);

  let row2 = "";
  for (const word of indexedWords[col1[2]]) {
    if (word[2] === col2[2] && word[4] === col3[2]) {
      row2 = word;
    }
  }

  let row3 = "";
  for (const word of indexedWords[col1[4]]) {
    if (word[2] === col2[4] && word[4] === col3[4]) {
      row3 = word;
    }
  }

  if (row2 && row3) {
    // if the word for row2 or row3 does not exist, return undefined
    return `${row1}${col1[1]} ${col2[1]} ${col3[1]}${row2}${col1[3]} ${col2[3]} ${col3[3]}${row3}`;
  }
};

export const getRandomWord = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
