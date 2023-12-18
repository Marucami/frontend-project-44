#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetings, getRandomInt, brainGameStart } from '../src/cli.js';

const randMax = 100;

const checkPrime = (n) => {
  if (n === 0 || n === 1) return 'no';
  let isPrime = true;
  let i = 2;
  while (i <= Math.sqrt(n) && isPrime === true) {
    if (n % i === 0) {
      isPrime = false;
    }
    i += 1;
  }
  return isPrime ? 'yes' : 'no';
};

function brainPrime(PlayerName) {
  const number = getRandomInt(0, randMax);
  const correctAnswer = checkPrime(number);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    return 1;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${PlayerName}!`);
  return 0;
}

const gameName = brainPrime;
const PointsTiWin = 3;
const PlayerName = greetings();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
brainGameStart(PointsTiWin, PlayerName, gameName);
