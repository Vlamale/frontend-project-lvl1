import readlineSync from 'readline-sync';

const welcome = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default welcome;
