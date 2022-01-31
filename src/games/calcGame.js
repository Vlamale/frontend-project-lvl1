import { askQuestion, generateRandomNumber, numberOfLevels } from '../index.js';
import welcome from '../cli.js';

export default function calcGame() {
  const userName = welcome();
  console.log('What is the result of the expression?');

  let level = 1;
  let isEnd = false;
  const possibleOperations = {
    '*': (n1, n2) => n1 * n2,
    '+': (n1, n2) => n1 + n2,
    '-': (n1, n2) => n1 - n2,
  };

  while (level <= numberOfLevels && !isEnd) {
    const firstNumber = generateRandomNumber(1, 100);
    const secondNumber = generateRandomNumber(1, 100);
    const operation = Object.keys(possibleOperations)[generateRandomNumber(0, 2)];

    const expression = `${firstNumber} ${operation} ${secondNumber}`;
    const correctAnswer = possibleOperations[operation](firstNumber, secondNumber);

    isEnd = askQuestion(expression, correctAnswer.toString(), userName, level);
    level += 1;
  }
}
