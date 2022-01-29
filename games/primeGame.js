import welcome from '../src/cli.js';
import { askQuestion, generateRandomNumber, numberOfLevels } from '../src/index.js';

export default function primeGame() {
  const userName = welcome();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let level = 1;
  let isEnd = false;

  const getCorrectAnswer = (num) => {
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  while (level <= numberOfLevels && !isEnd) {
    const number = generateRandomNumber(1, 100);
    const correctAnswer = getCorrectAnswer(number);

    isEnd = askQuestion(number, correctAnswer, userName, level);
    level += 1;
  }
}
