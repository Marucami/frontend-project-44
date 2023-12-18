import readlineSync from 'readline-sync';

export function greetings() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
}

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

export const brainGameStart = (PointsTiWin, PlayerName, gameName) => {
  let correctCount = 0;
  while (correctCount < PointsTiWin) {
    if (gameName(PlayerName) === 1) {
      correctCount += 1;
    } else return 0;
  }
  console.log(`Congratulations, ${PlayerName}!`);
  return 0;
};
