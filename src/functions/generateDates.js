export const generateArtistDobAndArtworkDate = (
  setArtistDob,
  setArtworkDate
) => {
  const randomYear = Math.floor(Math.random() * (2000 - 1990 + 1) + 1990);
  const artworkDate = randomYear + Math.floor(Math.random() * (17 - 6 + 1) + 6); //randomly select a year that is between 6 and 17 years after randomYear
  setArtworkDate(` ${artworkDate}`);
  setArtistDob(`(b. ${randomYear})`);
};
