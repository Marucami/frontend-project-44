import readlineSync from 'readline-sync';

export default function greetings() {
  const Name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${Name}`);
  return Name;
}
