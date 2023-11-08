const getAllPrices = (entireData, entireFriends) => {
  let allPrices = [];

  for (let i = 0; i < entireFriends.length; i += 1) {
    let sumOfIndividualPayer = 0;
    for (let j = 0; j < entireData.length; j += 1) {
      if (entireFriends[i] === entireData[j].payer) {
        sumOfIndividualPayer += Number(entireData[j].price);
        console.log(sumOfIndividualPayer);
      }
    }
    allPrices.push(sumOfIndividualPayer);
  }
  return allPrices;
};

export default getAllPrices;
