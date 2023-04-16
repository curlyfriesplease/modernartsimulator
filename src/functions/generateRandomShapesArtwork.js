import React from 'react';
import { useId } from 'react';
import '../styles/image.css';

import { RandomHLine, RandomBlob } from 'react-random-shapes';

export const GenerateRandomShapesArtwork = (setRandomImage) => {
  console.log('2 GenerateRandomShapesArtwork');
  // const numLines = Math.floor(Math.random() * 30);
  const numLines = 6;
  // const numControls = Math.floor(Math.random() * 10);
  const numControls = 10;
  // const rng = Array.from(new Array(numLines), (x, i) => i);
  // const start = Math.random() * 360;
  // const styles = rng.map((x) => {
  //   return {
  //     fill: 'transparent',
  //     stroke: `hsl(${start + (x / numLines) * 360}, 100%, 50%)`,
  //   };
  // });
  const randomColour1 = `hsl(${Math.random() * 360}, 100%, 50%)`;
  const randomColour2 = `hsl(${Math.random() * 360}, 100%, 50%)`;
  const BlobId1 = useId();
  const BlobId2 = useId();

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
          styleMid: {
            fill: 'transparent',
            stroke: `hsl(10, 100%, 50%)`,
          },
        }}
      />
    </>
  );
};
