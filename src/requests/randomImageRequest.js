export function randomImageFromApiNinjas(setRandomImage) {
  const category = 'abstract';
  const apiUrl = `https://api.api-ninjas.com/v1/randomimage?category=${category}`;
  fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': '3IFz8W6jYgx4boS9txijrLrk2xpnr7bykqvpV8uS',
      Accept: 'image/jpeg',
    },
  })
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
    .catch((error) => {
      console.error('error in execution', error);
    });
}