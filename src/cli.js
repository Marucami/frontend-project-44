/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

export function greetings() {
  console.log('Welcome to the Brain Games!');
  const Name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${Name}`);
  return Name;
}
