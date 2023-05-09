const randomWords = require('../sources/randomWords.json');
const influenceWords = require('../sources/influences.json');
const positiveWords = require('../sources/positives.json');
const negativeWords = require('../sources/negatives.json');
const feelingsWords = require('../sources/feelings.json');
const peopleplacesthingsWords = require('../sources/peoplePlacesThings.json');
const groupsWords = require('../sources/groups.json');
const elementsWords = require('../sources/elements.json');

export const generateFirstProseSentence = () => {
  // call and return 1 of 5 functions at random
  const sentenceType = Math.floor(Math.random() * 5);
  switch (sentenceType) {
    case 0:
      return sentenceTypeA();
    case 1:
      return sentenceTypeC();
    case 2:
      return sentenceTypeE();
    case 3:
      return sentenceTypeG();
    case 4:
      return sentenceTypeH();
  }
};

export const generateSecondProseSentence = () => {
  // call and return 1 of 4 functions at random
  const sentenceType = Math.floor(Math.random() * 4);
  switch (sentenceType) {
    case 0:
      return sentenceTypeB();
    case 1:
      return sentenceTypeD();
    case 2:
      return sentenceTypeF();
    case 3:
      return sentenceTypeI();
  }
};

const sentenceTypeA = () => {
  // work explores the relationship between X + Y
  const randomWord1 =
    randomWords.words[Math.floor(Math.random() * randomWords.words.length)];
  const randomWord2 =
    randomWords.words[Math.floor(Math.random() * randomWords.words.length)];
  return `The work explores the challenging relationship between ${randomWord1} and ${randomWord2}. `;
};

const sentenceTypeB = () => {
  // Influenced by X + Y, variations are created from A + B
  const influence1 =
    influenceWords.influences[
      Math.floor(Math.random() * influenceWords.influences.length)
    ];
  const influence2 =
    influenceWords.influences[
      Math.floor(Math.random() * influenceWords.influences.length)
    ];
  const positive1 =
    positiveWords.positives[
      Math.floor(Math.random() * positiveWords.positives.length)
    ];
  const negative1 =
    negativeWords.negatives[
      Math.floor(Math.random() * negativeWords.negatives.length)
    ];
  return `Influenced by ${influence1} and ${influence2}, meaningfully confronting ${positive1} and ${negative1}. `;
};

const sentenceTypeC = () => {
  // The depiction of X shows a kind of aesthetic feeling of Y and conveys the Z of (people, places, things)
  const depiction1 =
    influenceWords.influences[
      Math.floor(Math.random() * influenceWords.influences.length)
    ];
  const feeling1 =
    feelingsWords.feelings[
      Math.floor(Math.random() * feelingsWords.feelings.length)
    ];
  const positive1 =
    positiveWords.positives[
      Math.floor(Math.random() * positiveWords.positives.length)
    ];
  const peopleplacesthings1 =
    peopleplacesthingsWords.peopleplacesthings[
      Math.floor(
        Math.random() * peopleplacesthingsWords.peopleplacesthings.length
      )
    ];
  return `The depiction of ${depiction1} shows a kind of aesthetic feeling of ${feeling1} and conveys the ${positive1} of ${peopleplacesthings1}. `;
};

const sentenceTypeD = () => {
  // The artist has always been fascinated by X, and cites Y and Z as inspiration.
  const fascination1 =
    randomWords.words[Math.floor(Math.random() * randomWords.words.length)];
  const influence1 =
    influenceWords.influences[
      Math.floor(Math.random() * influenceWords.influences.length)
    ];
  const influence2 =
    influenceWords.influences[
      Math.floor(Math.random() * influenceWords.influences.length)
    ];
  return `The artist has always been fascinated by ${fascination1}, and cites ${influence1} and ${influence2} as inspiration. `;
};

const sentenceTypeE = () => {
  // While the artist may have intended the piece to symbolise X and Y existing in harmony, the piece also
  //    alludes to Z.
  const symbolised1 =
    peopleplacesthingsWords.peopleplacesthings[
      Math.floor(
        Math.random() * peopleplacesthingsWords.peopleplacesthings.length
      )
    ];
  const symbolised2 =
    peopleplacesthingsWords.peopleplacesthings[
      Math.floor(
        Math.random() * peopleplacesthingsWords.peopleplacesthings.length
      )
    ];
  const allusion1 =
    randomWords.words[Math.floor(Math.random() * randomWords.words.length)];
  return `While the artist may have intended the piece to symbolise ${symbolised1} and ${symbolised2} existing in harmony, the piece also alludes to ${allusion1}. `;
};

const sentenceTypeF = () => {
  // The piece expresses the way we perceive X and Y, drawing focus to traditional Z ignorance
  const perception1 =
    randomWords.words[Math.floor(Math.random() * randomWords.words.length)];
  const perception2 =
    peopleplacesthingsWords.peopleplacesthings[
      Math.floor(
        Math.random() * peopleplacesthingsWords.peopleplacesthings.length
      )
    ];
  const ignorance1 =
    groupsWords.groups[Math.floor(Math.random() * groupsWords.groups.length)];
  return `The piece expresses the way we perceive ${perception1} and ${perception2}, drawing focus to traditional ${ignorance1} ignorance. `;
};

const sentenceTypeG = () => {
  // As X is changed by Y, the viewer is left with a sense of Z
  const changed1 =
    elementsWords.elements[
      Math.floor(Math.random() * elementsWords.elements.length)
    ];
  const changed2 =
    negativeWords.negatives[
      Math.floor(Math.random() * negativeWords.negatives.length)
    ];
  const sense1 =
    feelingsWords.feelings[
      Math.floor(Math.random() * feelingsWords.feelings.length)
    ];
  return `As ${changed1} is changed by ${changed2}, the viewer is left with a sense of ${sense1}. `;
};

const sentenceTypeH = () => {
  // Although the complex imagery of the painting resists easy interpretation,
  //       it appears to be a comment on X, possibly reflecting Y
  const comment1 =
    peopleplacesthingsWords.peopleplacesthings[
      Math.floor(
        Math.random() * peopleplacesthingsWords.peopleplacesthings.length
      )
    ];
  const reflection1 =
    randomWords.words[Math.floor(Math.random() * randomWords.words.length)];
  return `Although the complex imagery of the painting resists easy interpretation, it appears to be a comment on ${comment1}, possibly reflecting ${reflection1}. `;
};

const sentenceTypeI = () => {
  // The piece is part of the artist's ongoing exploration of X and of their own Y
  const exploration1 =
    randomWords.words[Math.floor(Math.random() * randomWords.words.length)];
  const exploration2 =
    positiveWords.positives[
      Math.floor(Math.random() * positiveWords.positives.length)
    ];
  return `The piece is part of the artist's ongoing exploration of ${exploration1} and confronting their own ${exploration2}. `;
};
