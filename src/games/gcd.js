#!/usr/bin/env node
import { brainGameStart, getRandomNumber } from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

function findGCD(num1, num2) {
  let gcd = 1;
  if (num1 === 0 || num2 === 0) {
    return 1;
  }
  for (let i = 1; i <= num1 && i <= num2; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

function brainGCD() {
  const question = [getRandomNumber(0, 100), getRandomNumber(0, 100)];
  const answer = findGCD(...question).toString();
  return [question.join(' '), answer];
}

export default () => {
  brainGameStart(task, brainGCD);
};
