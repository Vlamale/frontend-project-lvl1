import { engine, generateRandomNumber } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getRightAnswer = (num) => {
  /* eslint-disable no-plusplus */
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return 'no';
    }
  }
  /* eslint-enable no-plusplus */
  return 'yes';
};

const generateData = () => {
  const number = generateRandomNumber(1, 100);
  const rightAnswer = getRightAnswer(number);
  return {
    question: number,
    rightAnswer,
  };
};

export default () => engine(description, generateData);
