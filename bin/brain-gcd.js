#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetings } from '../src/cli.js';
import { brainGameStart } from '../src/index.js';

function findGCD(num1, num2) {
  let gcd = 1;
  if (num1 === 0 || num2 === 0) {
    return gcd;
  }
  for (let i = 1; i <= num1 && i <= num2; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

function brainGCD(PlayerName) {
  const number1 = Math.floor(Math.random() * 101);
  const number2 = Math.floor(Math.random() * 101);
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
const PlayerName = greetings();
console.log('Find the greatest common divisor of given numbers.');
brainGameStart(PlayerName, gameName);
