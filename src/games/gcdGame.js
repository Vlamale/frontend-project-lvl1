import { engine, generateRandomNumber } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const getRightAnswer = (num1, num2) => {
  if (num2 > 0) {
    const rem = num1 % num2;
    return getRightAnswer(num2, rem);
  }
  return num1;
};

const generateData = () => {
  const firstNumber = generateRandomNumber(1, 100);
  const secondNumber = generateRandomNumber(1, 100);

  const expression = `${firstNumber} ${secondNumber}`;
  const rightAnswer = getRightAnswer(firstNumber, secondNumber);
  return {
    question: expression,
    rightAnswer,
  };
};

export default () => engine(description, generateData);
