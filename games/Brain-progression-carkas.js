import readlineSync from 'readline-sync';

import { greetings } from '../src/cli.js';

greetings();

const name = greetings();

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
  let correctAnswersCount = 0;
  console.log('What number is missing in the progression?');

  while (correctAnswersCount < 3) {
    const progression = generateArithmeticProgression();
    const hiddenIndex = Math.floor(Math.random() * progression.length);
    const hiddenValue = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = hiddenValue;

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

export { PlayProgression };
