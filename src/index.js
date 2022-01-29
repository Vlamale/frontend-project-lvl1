import readlineSync from 'readline-sync';

export const numberOfLevels = 3;

export const generateRandomNumber = (min = 1, max = 100) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

export const askQuestion = (params, rightAnswer, userName, level) => {
  console.log(`Question: ${params}`);

  const answer = readlineSync.question('Your answer: ');

  if (answer === rightAnswer) {
    console.log('Correct!');
    if (level === numberOfLevels) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }
    return false;
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);

  return true;
};
