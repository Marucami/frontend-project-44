import readlineSync from 'readline-sync';

const findGCD = (x, y) => {
  let a = Math.abs(x);
  let b = Math.abs(y);

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
};

function PlayFindGCD() {
  let correctAnswersCount = 0;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");

  while (correctAnswersCount < 3) {
    const randomNumber1 = Math.floor(Math.random() * 100) + 1;
    const randomNumber2 = Math.floor(Math.random() * 100) + 1;
    const expression = `${randomNumber1} ${randomNumber2}`;
    const userAnswer = readlineSync.question(`Вычислите выражение: ${expression}: `);
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
