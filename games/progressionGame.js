import welcome from '../src/cli.js';
import { askQuestion, generateRandomNumber, numberOfLevels } from '../src/index.js';

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

    for (let i = 0; i < progressionLength; i++) {
      if (i === hiddenPosition - 1) {
        correctAnswer = randomNumber + step * i;
        progression.push('..');
      } else {
        progression.push(randomNumber + step * i);
      }
    }

    const expression = progression.join(' ');

    isEnd = askQuestion(expression, correctAnswer.toString(), userName, level);
    level += 1;
  }
}
