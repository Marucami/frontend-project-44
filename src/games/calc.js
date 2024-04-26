#!/usr/bin/env node
/* eslint no-eval: 0 */
import { brainGameStart, getRandomNumber } from '../index.js';

const task = 'What is the result of the expression?';

function randomOperation() {
  const operations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operations.length);
  return operations[randomIndex];
}

function calculateExpression(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
}

function brainCalc() {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operator = randomOperation();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculateExpression(num1, operator, num2);
  return [question, String(correctAnswer)];
}

export default () => {
  brainGameStart(task, brainCalc);
};
