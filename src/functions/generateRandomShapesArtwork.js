import React from 'react';
import '../styles/image.css';
import { useEffect } from 'react';

import { RandomHLine } from 'react-random-shapes';

export const GenerateRandomShapesArtwork = ({ setIsLoading }) => {
  useEffect(() => {
    setIsLoading(false);
  }, []);

  console.log('2 GenerateRandomShapesArtwork');
  // const numLines = Math.floor(Math.random() * 30);
  const numLines = 8;
  // const numControls = Math.floor(Math.random() * 10);
  const numControls = 6;
  // const rng = Array.from(new Array(numLines), (x, i) => i);
  // const start = Math.random() * 360;
  // const styles = rng.map((x) => {
  //   return {
  //     fill: 'transparent',
  //     stroke: `hsl(${start + (x / numLines) * 360}, 100%, 50%)`,
  //   };
  // });

  // const randomColour1 = `hsl(${Math.random() * 360}, 100%, 50%)`;
  // const randomColour2 = `hsl(${Math.random() * 360}, 100%, 50%)`;

  return (
    <>
      <RandomHLine
        className="absoluteChildFullSize showOnTop"
        width={500}
        height={500}
        options={{
          numLines: numLines,
          numControls: numControls,
          debug: false,
          styleMid: {
            fill: 'transparent',
            stroke: `hsl(30, 100%, 50%)`,
          },
        }}
      />
    </>
  );
};
