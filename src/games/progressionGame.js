import { engine, generateRandomNumber } from '../index.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const generateData = () => {
  const randomNumber = generateRandomNumber();
  const hiddenPosition = generateRandomNumber(0, progressionLength - 1);
  const step = generateRandomNumber(2, progressionLength);
  const progression = [];
  /* eslint-disable no-plusplus */
  for (let i = 0; i < progressionLength; i++) {
    progression.push(randomNumber + step * i);
  }
  /* eslint-enable no-plusplus */
  const rightAnswer = progression.splice(hiddenPosition, 1, '..');
  return {
    question: progression.join(' '),
    rightAnswer,
  };
};

export default () => engine(description, generateData);
