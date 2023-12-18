#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetings, getRandomInt, brainGameStart } from '../src/cli.js';

const randMax = 100;

function isPrime(num) {
  if (num <= 1) {
    return 'no';
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}

function brainPrime(PlayerName) {
  const number = getRandomInt(0, randMax);
  const correctAnswer = isPrime(number);
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
