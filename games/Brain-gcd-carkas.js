import readlineSync from 'readline-sync';

import { greetings } from '../src/cli.js';

greetings();

const name = greetings();

const findGCD = (number1, number2) => {
  let a = Math.abs(number1);
  let b = Math.abs(number2);

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
};

function PlayFindGCD() {
  let correctAnswersCount = 0;
  console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");

  while (correctAnswersCount < 3) {
    const randomNumber1 = Math.floor(Math.random() * 100) + 1;
    const randomNumber2 = Math.floor(Math.random() * 100) + 1;
    const expression = `${randomNumber1} ${randomNumber2}`;
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const userNumber = parseFloat(userAnswer);
    const correctAnswer = findGCD(randomNumber1, randomNumber2);

    if (userNumber === correctAnswer) {
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
export { PlayFindGCD };
