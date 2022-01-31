import welcome from '../cli.js';
import { askQuestion, generateRandomNumber, numberOfLevels } from '../index.js';

export default function evenGame() {
  const userName = welcome();
  console.log('Find the greatest common divisor of given numbers.');

  let level = 1;
  let isEnd = false;

  const getCorrectAnswer = (num1, num2) => {
    if (num2 > 0) {
      const rem = num1 % num2;
      return getCorrectAnswer(num2, rem);
    }
    return num1;
  };

  while (level <= numberOfLevels && !isEnd) {
    const firstNumber = generateRandomNumber(1, 100);
    const secondNumber = generateRandomNumber(1, 100);

    const expression = `${firstNumber} ${secondNumber}`;
    const correctAnswer = getCorrectAnswer(firstNumber, secondNumber);

    isEnd = askQuestion(expression, correctAnswer.toString(), userName, level);
    level += 1;
  }
}
