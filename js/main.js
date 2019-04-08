'use strict';

// dom elements to work with
const input = document.querySelector('#number');
const numGuessesText = document.querySelector('.guess');
const btn = document.querySelector('.submitBtn');
const hintText = document.querySelector('.hint');

// variables to work with
let winningNumber = 0;
let numberOfGuesses = 0;

// Function to generate a number between 1 to 100
const getRandomNumber = max => {
  return Math.ceil(Math.random() * max);
};

const checkGuess = event => {
  event.preventDefault();
  // take input value
  const value = parseInt(input.value);
  console.log(`The user entered the number: ${value}`);
  // check if the number is correct, too height or too low
  if (winningNumber === value) {
    hintText.innerHTML = '¡HAS GANADO, CAMPEONA!';
  } else if (value > winningNumber) {
    hintText.innerHTML = 'demasiado alto';
  } else {
    hintText.innerHTML = 'demasiado bajo';
  }
  // add 1 to guesses
  numberOfGuesses++;
  numGuessesText.innerHTML = numberOfGuesses;
};

// generate a number between 1 and 100;
const startGame = () => {
  winningNumber = getRandomNumber(100);
  console.log(`winning number is: ${winningNumber}`);
  numberOfGuesses = 0;
};

startGame();

//event listener
btn.addEventListener('click', checkGuess);
