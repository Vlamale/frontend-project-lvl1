#!/usr/bin/env node
import readlineSync from 'readline-sync';

(function brainEven() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let level = 1;
  const maxLevel = 3;
  const generateRandomNumber = () => Math.ceil(Math.random() * 100);
  const isEven = (num) => num % 2 === 0;
  const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');
  const isRightAnswer = (answ, num) => (answ === 'yes' && isEven(num)) || (answ === 'no' && !isEven(num));
  const startLevel = () => {
    const randomNumber = generateRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (isRightAnswer(answer, randomNumber)) {
      console.log('Correct!');
      if (level === maxLevel) {
        return console.log(`Congratulations, ${userName}!`);
      }
      level += 1;
      return startLevel();
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getCorrectAnswer(randomNumber)}'.`);
    return console.log(`Let's try again, ${userName}!`);
  };

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  startLevel();
}());
