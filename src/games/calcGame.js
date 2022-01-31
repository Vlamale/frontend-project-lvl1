import { engine, generateRandomNumber } from '../index.js';

const description = 'What is the result of the expression?';

const possibleOperations = {
  '*': (n1, n2) => n1 * n2,
  '+': (n1, n2) => n1 + n2,
  '-': (n1, n2) => n1 - n2,
};

const getCorrectAnswer = (op, n1, n2) => possibleOperations[op](n1, n2);

const generateData = () => {
  const firstNumber = generateRandomNumber(1, 100);
  const secondNumber = generateRandomNumber(1, 100);
  const operation = Object.keys(possibleOperations)[generateRandomNumber(0, 2)];

  const expression = `${firstNumber} ${operation} ${secondNumber}`;
  const rightAnswer = getCorrectAnswer(operation, firstNumber, secondNumber);
  return {
    question: expression,
    rightAnswer,
  };
};

export default () => engine(description, generateData);
