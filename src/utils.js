const SCORE_MAX = 100;
const SCORE_BUFFER = 0.3;
const SCORE_MAP_SIZE = 63;

const shuffle = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const findScore = (distance) => {
  return Math.round(
    SCORE_MAX *
      Math.exp((-10 * Math.max(distance - SCORE_BUFFER, 0)) / SCORE_MAP_SIZE)
  );
};

export { shuffle, findScore };
