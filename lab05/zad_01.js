'use strict';
const numbers = [2, 4, 6,6];
const sum = numbers.reduce(function(sum, number) { // <= sum = akumulator, number = z iteracji itemy
    const updatedSum = sum + number;
    return updatedSum;
  }, 0); // <= wartosc poczatkowa akumulatora
  console.log(sum)