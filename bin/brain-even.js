#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetings, getRandomInt, brainGameStart } from '../src/cli.js';

function brainEven(PlayerName) {
  const number = getRandomInt(0, 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
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

const gameName = brainEven;
const PointsTiWin = 3;
const PlayerName = greetings();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
brainGameStart(PointsTiWin, PlayerName, gameName);
