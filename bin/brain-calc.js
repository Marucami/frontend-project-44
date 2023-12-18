#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetings, getRandomInt, brainGameStart } from '../src/cli.js';

const operations = ['+', '-', '*'];

function brainCalc(PlayerName) {
  const [number1, number2] = [getRandomInt(0, 100), getRandomInt(0, 100)];
  const operation = getRandomInt(0, 2);
  let correctAnswer;
  switch (operation) {
    case 0:
      correctAnswer = number1 + number2;
      break;
    case 1:
      correctAnswer = number1 - number2;
      break;
    case 2:
      correctAnswer = number1 * number2;
      break;
    default:
      return 0;
  }
  console.log(`Question: ${number1} ${operations[operation]} ${number2}`);
  const answer = readlineSync.question('Your answer: ');
  if (parseInt(answer, 10) === correctAnswer) {
    console.log('Correct!');
    return 1;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${PlayerName}!`);
  return 0;
}

const gameName = brainCalc;
const PointsTiWin = 3;
const PlayerName = greetings();
console.log('What is the result of the expression?');
brainGameStart(PointsTiWin, PlayerName, gameName);
