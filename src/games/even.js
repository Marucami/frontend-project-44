#!/usr/bin/env node
import { brainGameStart, getRandomNumber } from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const brainEven = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isEven(question);
  return [question, correctAnswer];
};

export default () => {
  brainGameStart(task, brainEven);
};
