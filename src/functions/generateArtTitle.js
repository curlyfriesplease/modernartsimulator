import { randomHistoricalEvent } from '../requests/historicalEvent';

//write a function to get a random word from array ../sources/randomWords.json
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
  return `${randomWord1}: ${introductoryPhrase} ${randomWord2},`;
};

export const generateArtTitle = (setArtTitle) => {
  setArtTitle(createOneLiner());
  //   randomHistoricalEvent(setArtTitle);
};
