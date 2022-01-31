import readlineSync from 'readline-sync';
import greeting from './cli.js';

export const numberOfLevels = 3;

export const generateRandomNumber = (min = 1, max = 100) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

export const engine = (description, generateData) => {
  const userName = greeting();
  console.log(description);

  let level = 1;
  let isEnd = false;

  while (level <= numberOfLevels && !isEnd) {
    const { question, rightAnswer } = generateData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === rightAnswer.toString()) {
      console.log('Correct!');
      if (level === numberOfLevels) {
        console.log(`Congratulations, ${userName}!`);
        isEnd = true;
      }
      isEnd = false;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      isEnd = true;
    }
    level += 1;
  }
};
