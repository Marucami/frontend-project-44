#!/usr/bin/env node
import { brainGameStart, getRandomNumber } from '../index.js';

const task = 'What number is missing in the progression?';

function generateArithmeticProgression() {
  const length = Math.floor(Math.random() * 6) + 5;
  const start = Math.floor(Math.random() * 11);
  const diff = Math.floor(Math.random() * 11);
  const progression = [start];
  for (let i = 1; i < length; i += 1) {
    progression.push(start + diff * i);
  }
  return progression;
}

function PlayProgression() {
  const progression = generateArithmeticProgression();
  const minIndexOfHiddenNumber = 0;
  const maxIndexOfHiddenNumber = progression.length - 1;
  const indexOfHiddenNumber = getRandomNumber(minIndexOfHiddenNumber, maxIndexOfHiddenNumber);
  const answer = String(progression[indexOfHiddenNumber]);
  progression[indexOfHiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, answer];
}

export default () => {
  brainGameStart(task, PlayProgression);
};
