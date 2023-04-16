import { randomHistoricalEvent } from '../requests/historicalEvent';

const createOneLiner = () => {
  const randomWords = require('../sources/randomWords.json');
  const randomWordPreCapitalisation =
    randomWords.words[Math.floor(Math.random() * randomWords.words.length)];
  const randomWord1 =
    randomWordPreCapitalisation.charAt(0).toUpperCase() +
    randomWordPreCapitalisation.slice(1);
  const randomWord2 =
    randomWords.words[Math.floor(Math.random() * randomWords.words.length)];
  const introductoryPhrases = [
    'An expression of ',
    'A celebration of ',
    'A reflection on ',
    'A meditation on ',
    'A contemplation of ',
    'A study of ',
    'A depiction of ',
    'A portrayal of ',
    'A representation of ',
    'Meditations on ',
    'Reflections on ',
  ];
  const introductoryPhrase =
    introductoryPhrases[Math.floor(Math.random() * introductoryPhrases.length)];
  const randomBoolean = Math.random() >= 0.5;
  return randomBoolean
    ? `${randomWord1}: ${introductoryPhrase} ${randomWord2}, `
    : `${randomWord1}, `;
};

export const generateArtTitle = (setArtTitle) => {
  // one in 10 times, call randomHistoricalEvent, otherwise call createOneLiner
  // const randomBoolean = Math.random() >= 0.9;
  // if (randomBoolean) {
  //   randomHistoricalEvent(setArtTitle);
  // } else {
  setArtTitle(createOneLiner());
  // }
};
