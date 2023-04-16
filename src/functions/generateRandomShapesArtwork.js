import React from 'react';
import '../styles/image.css';

import { RandomHLine, RandomBlob } from 'react-random-shapes';

export const GenerateRandomShapesArtwork = (setRandomImage) => {
  console.log('generateRandomShapesArtwork() called');
  const numLines = Math.floor(Math.random() * 7);
  // const numLines = 6;
  const numControls = Math.floor(Math.random() * 10);
  // const numControls = 10;
  const rng = Array.from(new Array(numLines), (x, i) => i);
  const start = Math.random() * 360;
  const styles = rng.map((x) => {
    return {
      fill: 'transparent',
      stroke: `hsl(${start + (x / numLines) * 360}, 100%, 50%)`,
    };
  });
  const randomColour1 = `hsl(${Math.random() * 360}, 100%, 50%)`;
  const randomColour2 = `hsl(${Math.random() * 360}, 100%, 50%)`;

  return (
    <>
      <RandomHLine
        className="absoluteChildFullSize showOnTop"
        width={300}
        height={300}
        options={{
          numLines: numLines,
          numControls: numControls,
          debug: false,
          styleMid: styles,
        }}
      />
      <RandomBlob
        className="absoluteChildFullSize"
        size={1}
        numControls={7}
        options={{
          numBlobs: 2,
          numControls: 4,
          style: { fill: randomColour1 },
        }}
      />
      <RandomBlob
        className="absoluteChildFullSize"
        size={2}
        numControls={7}
        options={{
          numBlobs: 5,
          numControls: 7,
          style: { fill: randomColour2 },
        }}
      />
    </>
  );
};
