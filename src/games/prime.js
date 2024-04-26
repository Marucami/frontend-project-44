#!/usr/bin/env node
import { brainGameStart, getRandomNumber } from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

function brainPrime() {
  const question = getRandomNumber(0, 100);
  const answer = isPrime(question);
  return [question, answer];
}

export default () => {
  brainGameStart(task, brainPrime);
};
