'use strict';

// dom elements to work with
const input = document.querySelector('#number');
const numGuessesText = document.querySelector('.guess');
const btn = document.querySelector('.submitBtn');
const hintText = document.querySelector('.hint');
const resetButton = document.querySelector('.resetBtn');

// variables to work with
let winningNumber = 0;
let numberOfGuesses = 0;
let wonGame = false;

// Function to generate a random number between 1 to max
const getRandomNumber = max => {
  return Math.ceil(Math.random() * max);
};

// if the input is empty or the user entered a number bigger than 100 or a negative number
const notInRange = value => {
  if (!value) {
    hintText.innerHTML = 'Try guess the winning number by writing a number in the field.';
    return false;
  }
  if (value <= 0 || value > 100) {
    hintText.innerHTML = 'The winning number is between 1 and 100, try guess in that range...';
    numberOfGuesses++;
    numGuessesText.innerHTML = numberOfGuesses;
    return false;
  }
  return true;
};

// if in range check if the number is correct, too height or too low
const checkWinning = value => {
  if (winningNumber === value) {
    wonGame = true;
    hintText.innerHTML = '¡HAS GANADO, CAMPEONA!';
    resetButton.classList.toggle('hidden');
    btn.classList.toggle('hidden');
  } else if (value > winningNumber) {
    hintText.innerHTML = 'demasiado alto';
  } else {
    hintText.innerHTML = 'demasiado bajo';
  }
  numberOfGuesses++;
  numGuessesText.innerHTML = numberOfGuesses;
};

const checkGuess = event => {
  event.preventDefault();
  if (!wonGame) {
    const value = parseInt(input.value);
    console.log(`The user entered the number: ${value}`);
    const inRange = notInRange(value);
    if (inRange) {
      checkWinning(value);
    }
  } else {
    hintText.innerHTML = 'You already WON! click Try Again if you want to reset the game.';
  }
};

// start game and generate a number between 1 and 100;
const startGame = () => {
  winningNumber = getRandomNumber(100);
  console.log(`winning number is: ${winningNumber}`);
  numberOfGuesses = 0;
  numGuessesText.innerHTML = numberOfGuesses;
};

// reset game after winning
const resetGame = () => {
  startGame();
  hintText.innerHTML = 'Escribe un número y dale a <span class="italic">prueba</span>';
  input.value = '';
  btn.classList.toggle('hidden');
  resetButton.classList.toggle('hidden');
  wonGame = false;
};

const checkEnterPress = event => {
  if (event.keyCode === 13) {
    checkGuess(event);
  }
};

startGame();

// event listeners on the buttons and window
window.addEventListener('keypress', checkEnterPress);
btn.addEventListener('click', checkGuess);
resetButton.addEventListener('click', resetGame);
