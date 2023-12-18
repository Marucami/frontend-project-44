#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetings, brainGameStart } from '../src/cli.js';

function isEven(number) {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

function playEven(PlayerName) {
  const Number = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${Number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(Number);
  if ((correctAnswer === userAnswer)) {
    console.log('Correct!');
    return 1;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${PlayerName}!`);
  return 0;
}

const PlayerName = greetings();
const PointsToWin = 3;
const gameName = playEven;
console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
brainGameStart(PointsToWin, PlayerName, gameName);
