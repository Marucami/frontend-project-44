export function brainGameStart(PlayerName, gameName) {
  let correctCount = 0;
  while (correctCount < 3) {
    if (gameName(PlayerName) === 1) {
      correctCount += 1;
    } else return 0;
  }
  console.log(`Congratulations, ${PlayerName}!`);
  return 0;
}

export const getRandomInt = (min, max) => {
  Math.floor(Math.random() * (max + 1 - min) + min);
};
