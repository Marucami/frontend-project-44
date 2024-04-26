import readlineSync from 'readline-sync';

export default function greetings() {
  console.log('Welcome to the Brain Games!');
  const Name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${Name}`);
  return Name;
}
