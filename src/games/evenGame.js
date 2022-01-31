import { engine, generateRandomNumber } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const getRightAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

const generateData = () => {
  const randomNumber = generateRandomNumber();
  const rightAnswer = getRightAnswer(randomNumber);
  return {
    question: randomNumber,
    rightAnswer,
  };
};

export default () => engine(description, generateData);
