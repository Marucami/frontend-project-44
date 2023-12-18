import readlineSync from 'readline-sync';

import { greetings } from '../src/cli.js';

greetings();

const name = greetings();

function isEven(number) {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

function playGame() {
  let correctAnswersCount = 0;
  console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");

  while (correctAnswersCount < 3) {
    const Number = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${Number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(Number);

    if ((correctAnswer === userAnswer.toLowerCase())) {
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

export { playGame };
