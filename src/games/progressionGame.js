import welcome from '../cli.js';
import { askQuestion, generateRandomNumber, numberOfLevels } from '../index.js';

export default function evenGame() {
  const userName = welcome();
  console.log('What number is missing in the progression?');

  let level = 1;
  let isEnd = false;
  const progressionLength = 10;

  while (level <= numberOfLevels && !isEnd) {
    const randomNumber = generateRandomNumber();
    const hiddenPosition = generateRandomNumber(1, progressionLength);
    const step = generateRandomNumber(2, progressionLength);

    let correctAnswer = null;
    const progression = [];
    /* eslint-disable no-plusplus */
    for (let i = 0; i < progressionLength; i++) {
      if (i === hiddenPosition - 1) {
        correctAnswer = randomNumber + step * i;
        progression.push('..');
      } else {
        progression.push(randomNumber + step * i);
      }
    }
    /* eslint-enable no-plusplus */

    const expression = progression.join(' ');

    isEnd = askQuestion(expression, correctAnswer.toString(), userName, level);
    level += 1;
  }
}
