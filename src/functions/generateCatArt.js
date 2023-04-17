import { getRandomCatImage } from '../requests/randomCatImage';
import { useEffect, useState } from 'react';
import { randomHistoricalEvent } from '../requests/historicalEvent';
import '../styles/image.css';
import '../styles/catArt.css';

export const GenerateCatArt = ({ isLoading, setIsLoading }) => {
  console.log('3 GenerateCatArt');

  const [randomCatImage, setRandomCatImage] = useState(null);
  const [historySentence, setHistorySentence] = useState('');

  const randomRotationInt = Math.floor(Math.random() * 360);
  const randomRotationInt2 = Math.floor(Math.random() * 360);
  const randomWidthPercentage = Math.floor(Math.random() * 70) + 40;
  const randomHeightPercentage = Math.floor(Math.random() * 70) + 40;

  useEffect(() => {
    if (!randomCatImage) {
      getRandomCatImage(setRandomCatImage, setIsLoading);
    }

    if (historySentence === '') {
      randomHistoricalEvent(setHistorySentence);
    }

    // Rotate the cat image, stretch it to look all weird
    if (randomCatImage) {
      document.getElementById(
        'cat'
      ).style.transform = `rotate(${randomRotationInt}deg)`;
      document.getElementById('cat').style.width = `${randomWidthPercentage}%`;
      document.getElementById(
        'cat'
      ).style.height = `${randomHeightPercentage}%`;
      const randomNumberOutOfFour = Math.floor(Math.random() * 5);
      // sometimes invert it as well
      if (randomNumberOutOfFour === 0) {
        document.getElementById('cat').style.filter = 'invert(100%)';
      }
      console.log(`catContainerBackground${randomNumberOutOfFour}`);
      // Add a random background color to the cat container
      document.querySelector('#catContainer').className = '';
      document
        .querySelector('#catContainer')
        .classList.add(`catContainerBackground${randomNumberOutOfFour}`);
    }

    // Show a random historical event and rotate that badboy
    if (historySentence !== '') {
      document.getElementById(
        'historySentence'
      ).style.transform = `rotate(${randomRotationInt2}deg)`;
    }

    if (isLoading && historySentence && randomCatImage) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [randomCatImage, historySentence]);

  console.log(`randomCatImage: ${randomCatImage}`);

  return (
    <>
      <div id="catContainer">
        <img src={randomCatImage} alt="random" id="cat" className="catImage" />
        <div id="historySentence" className="historySentence">
          {historySentence}
        </div>
      </div>
    </>
  );
};
