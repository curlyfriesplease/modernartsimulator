export function randomImageFromApiNinjas(setRandomImage, setIsLoading) {
  const category = 'abstract';
  const apiUrl = `https://api.api-ninjas.com/v1/randomimage?category=${category}`;
  fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': process.env.REACT_APP_APININJAS_API_KEY,
      Accept: 'image/jpeg',
    },
  })
    .then(console.log('fetching random image'))
    .then((response) => response.body)
    .then((body) => {
      const reader = body.getReader();
      return new ReadableStream({
        start(controller) {
          return pump();
          function pump() {
            return reader.read().then(({ done, value }) => {
              // When no more data needs to be consumed, close the stream
              if (done) {
                controller.close();
                return;
              }
              // Enqueue the next data chunk into our target stream
              controller.enqueue(value);
              return pump();
            });
          }
        },
      });
    })
    // Create a new response out of the stream
    .then((stream) => new Response(stream))
    // Create an object URL for the response
    .then((response) => response.blob())
    .then((blob) => URL.createObjectURL(blob))
    // Update image
    .then((url) => setRandomImage(url))
    .then(setIsLoading(false))
    .catch((error) => {
      console.error('error in execution', error);
    });
}
