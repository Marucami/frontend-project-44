#!/usr/bin/env node
/* eslint no-eval: 0 */

import readlineSync from 'readline-sync';
import { greetings } from '../cli.js';
import { brainGameStart } from '../index.js';

function randomOperation() {
  const operations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operations.length);
  return operations[randomIndex];
}

function generateMathExpression() {
  const num1 = Math.floor(Math.random() * 101);
  const num2 = Math.floor(Math.random() * 101);
  const operator = randomOperation();

  return `${num1} ${operator} ${num2}`;
}

function calculateExpression(expression) {
  return eval(expression);
}

function brainCalc(PlayerName) {
  const expression = generateMathExpression();
  const correctAnswer = calculateExpression(expression);
  console.log(`Question: ${expression}`);
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
const PlayerName = greetings();
console.log('What is the result of the expression?');

export default () => {
  brainGameStart(PlayerName, gameName);
};
