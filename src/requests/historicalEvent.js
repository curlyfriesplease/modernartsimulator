export async function randomHistoricalEvent(setter) {
  //randomly select from 'peace', 'war', 'king', or 'animals'
  const text = () => {
    const random = Math.floor(Math.random() * 4);
    switch (random) {
      case 0:
        return 'peace';
      case 1:
        return 'war';
      case 2:
        return 'king';
      case 3:
        return 'queen';
      default:
        return 'peace';
    }
  };
  const apiUrl = `https://api.api-ninjas.com/v1/historicalevents?text=${text()}`;
  let returnedText = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': process.env.REACT_APP_APININJAS_API_KEY,
    },
  })
    // .then((response) => console.dir(response.body))
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
    .then((response) => response.json())
    .then((response) => {
      console.log(response[0].event);
      return setter(response[0].event);
    })
    // .then((json) => {
    //   return json();
    // })
    .catch((error) => {
      console.error('error in execution', error);
    });
}
