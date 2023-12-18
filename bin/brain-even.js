#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetings, brainGameStart } from '../src/cli.js';

function playEven(PlayerName) {
  const Number = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = Number % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${Number}`);
  const PlayerAnswer = readlineSync.question('Your answer: ');
  if (PlayerAnswer === correctAnswer) {
    console.log('Correct!');
    return 1;
  }
  console.log(`'${PlayerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${PlayerName}!`);
  return 0;
}

const PlayerName = greetings();
const PointsToWin = 3;
const gameName = playEven;
console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
brainGameStart(PointsToWin, PlayerName, gameName);
