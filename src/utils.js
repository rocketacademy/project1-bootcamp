const randomNumber = (limit) => {
  return Math.floor(Math.random() * limit);
};

const isOdd = (number) => {
  return number % 2 ? true : false;
};

export { randomNumber, isOdd };
