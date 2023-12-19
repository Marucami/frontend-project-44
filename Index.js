/* eslint-disable import/prefer-default-export */
export const brainGameStart = (PlayerName, gameName) => {
  let correctCount = 0;
  while (correctCount < 3 && gameName(PlayerName) === 1) {
    correctCount += 1;
  }
  console.log(`Congratulations, ${PlayerName}!`);
  return 0;
};
