export function generateArtistName(setArtistName) {
  const firstNames = require('../sources/firstNames.json');
  const lastNames = require('../sources/surnames.json');
  const firstName =
    firstNames.names[Math.floor(Math.random() * firstNames.names.length)];
  const lastName =
    lastNames.names[Math.floor(Math.random() * lastNames.names.length)];
  const middleNameArray = [
    'von ',
    'de ',
    'J. ',
    'van ',
    'di ',
    'T. ',
    'D. ',
    'X. ',
    'Mc',
    "O'",
  ];
  // 1 in 4 chance of having a middle name
  const middleName = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    if (randomNumber === 0) {
      return middleNameArray[
        Math.floor(Math.random() * middleNameArray.length)
      ];
    } else {
      return '';
    }
  };
  const artistName = `${firstName} ${middleName()}${lastName}`;
  console.log(`Artist name: ${artistName}`);
  return setArtistName(artistName);
}
