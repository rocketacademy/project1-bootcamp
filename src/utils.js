const SCORE_MAX = 100;
const SCORE_BUFFER = 0.3;
const SCORE_MAP_SIZE = 63;

/**
 * Shuffles array using Fisher-Yates algorithm
 * @param {*[]} array array to be shuffled
 * @returns {*[]} shuffled array
 */
const shuffle = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Computes score using exponential decay
 * @param {number} distance distance from correct location in kilometres
 * @returns {number} score, where 0 <= score <= 100
 */
const findScore = (distance) => {
  return Math.round(
    SCORE_MAX *
      Math.exp((-10 * Math.max(distance - SCORE_BUFFER, 0)) / SCORE_MAP_SIZE)
  );
};

/**
 * Round distance and add units for display
 * @param {number} distance distance to be displayed
 * @returns {string} representation of distance
 */
const writeDistance = (distance) => {
  if (distance < 1) {
    return (distance * 1000).toFixed(0) + " m";
  } else {
    return distance.toFixed(1) + " km";
  }
};

export { shuffle, findScore, writeDistance };
