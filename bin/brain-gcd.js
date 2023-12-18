#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetings, getRandomInt, brainGameStart } from '../src/cli.js';

const findGCD = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a > b) a %= b;
    else b %= a;
  }
  return a + b;
};

const randMax = 100;

function brainGCD(PlayerName) {
  const [number1, number2] = [getRandomInt(0, randMax), getRandomInt(0, randMax)];
  const correctAnswer = findGCD(number1, number2);
  console.log(`Question: ${number1} ${number2}`);
  const answer = readlineSync.question('Your answer: ');
  if (parseInt(answer, 10) === correctAnswer) {
    console.log('Correct!');
    return 1;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${PlayerName}!`);
  return 0;
}

const gameName = brainGCD;
const PointsTiWin = 3;
const PlayerName = greetings();
console.log('Find the greatest common divisor of given numbers.');
brainGameStart(PointsTiWin, PlayerName, gameName);
