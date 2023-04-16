import { getRandomCatImage } from '../requests/randomCatImage';
import { useEffect, useState } from 'react';
import { randomHistoricalEvent } from '../requests/historicalEvent';
import '../styles/image.css';

export const GenerateCatArt = ({ setIsLoading }) => {
  console.log('3 GenerateCatArt');

  const [randomCatImage, setRandomCatImage] = useState(null);
  const [historySentence, setHistorySentence] = useState('');

  const randomRotationInt = Math.floor(Math.random() * 360);
  const randomRotationInt2 = Math.floor(Math.random() * 360);
  const randomWidthPercentage = Math.floor(Math.random() * 70) + 40;
  const randomHeightPercentage = Math.floor(Math.random() * 70) + 40;

  //   useEffect(() => {
  //     if (randomImage) {
  //       setIsLoading(false);
  //     }
  //   }, [randomImage]);

  useEffect(() => {
    if (!randomCatImage) {
      getRandomCatImage(setRandomCatImage, setIsLoading);
    }
    if (historySentence === '') {
      randomHistoricalEvent(setHistorySentence);
    }

    if (randomCatImage) {
      document.getElementById(
        'cat'
      ).style.transform = `rotate(${randomRotationInt}deg)`;
      document.getElementById('cat').style.width = `${randomWidthPercentage}%`;
      document.getElementById(
        'cat'
      ).style.height = `${randomHeightPercentage}%`;
      if (Math.floor(Math.random() * 4) === 0) {
        document.getElementById('cat').style.filter = 'invert(100%)';
      }

      if (historySentence !== '') {
        document.getElementById(
          'historySentence'
        ).style.transform = `rotate(${randomRotationInt2}deg)`;
      }

      setIsLoading(false);
    }
  }, [randomCatImage, historySentence]);

  console.log(`randomCatImage: ${randomCatImage}`);

  return (
    <>
      {randomCatImage && (
        <>
          <img
            src={randomCatImage}
            alt="random"
            id="cat"
            className="catImage"
          />
          <div id="historySentence" className="historySentence">
            {historySentence}
          </div>
        </>
      )}
    </>
  );
};
