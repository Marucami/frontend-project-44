import readlineSync from 'readline-sync';

function isEven(number) {
  return number % 2 === 0;
}

function playGame() {
  let correctAnswersCount = 0;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");

  while (correctAnswersCount < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if ((isEven(randomNumber) && userAnswer.toLowerCase() === 'yes')
      || (!isEven(randomNumber) && userAnswer.toLowerCase() === 'no')) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

export { playGame };
