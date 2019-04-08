'use strict';

console.log('hello');

// Función que genera un número aleatorio hasta un máximo dado
const getRandomNumber = max => {
  return Math.ceil(Math.random() * max);
};

// generate a number between 1 and 100;
getRandomNumber(100);
