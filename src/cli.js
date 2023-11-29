import readlineSync from 'readline-sync';

function greetings() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

export { greetings };
