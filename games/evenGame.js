import welcome from '../src/cli.js';
import { askQuestion, generateRandomNumber, numberOfLevels } from '../src/index.js';

export default function evenGame() {
  const userName = welcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let level = 1;
  let isEnd = false;

  const getCorrectAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

  while (level <= numberOfLevels && !isEnd) {
    const randomNumber = generateRandomNumber();
    isEnd = askQuestion(randomNumber, getCorrectAnswer(randomNumber), userName, level);
    level += 1;
  }
}
