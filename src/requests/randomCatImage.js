export const getRandomCatImage = (setRandomCatImage) => {
  // make a get request to https://api.thecatapi.com/v1/images/0XYvRd7oD.jpg
  // and return the response
  return fetch('https://api.thecatapi.com/v1/images/search', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': process.env.REACT_APP_THECATAPI_API_KEY,
      Accept: 'image/jpeg',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      return setRandomCatImage(json[0].url);
    })
    .catch((error) => {
      console.error('error in execution', error);
    });
};
