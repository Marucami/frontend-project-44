import readlineSync from 'readline-sync';

function name() {
  const Name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${Name}`);
  return Name;
}

function brainGameStart(task, gameName) {
  const PlayerName = name();
  console.log(task);
  let correctCount = 0;
  while (correctCount < 3) {
    const [question, correctAnswer] = gameName();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== playerAnswer) {
      console.log(`"${playerAnswer}" is a wrong answer. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${PlayerName}!`);
      return;
    }
    console.log('Correct!');
    correctCount += 1;
  }
  console.log(`Congratulations, ${PlayerName}!`);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { brainGameStart, getRandomNumber };
