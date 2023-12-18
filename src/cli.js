import readlineSync from 'readline-sync';

export function greetings() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

export function brainGameStart(PointsToWin, PlayerName, gameName) {
  let correctCount = 0;
  while (correctCount < PointsToWin) {
    if (gameName(PlayerName) === 1) correctCount += 1;
    else return 0;
  }
  console.log(`Congratulations, ${PlayerName}!`);
  return 0;
}
