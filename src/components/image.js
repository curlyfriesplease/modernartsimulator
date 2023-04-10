import { useEffect, useState } from 'react';
import { randomImageFromApiNinjas } from '../requests/randomImageRequest';
import '../styles/image.css';
import '../App.css';

export const Image = ({ randomImage, setRandomImage }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (randomImage) {
      setIsLoading(false);
    }
  }, [randomImage]);

  return (
    <>
      <button
        className="debuggingButton"
        onClick={() => randomImageFromApiNinjas(setRandomImage)}
      >
        Fetch image
      </button>
      <div className="imageContainer">
        {isLoading && (
          <div className="drawing" id="loading">
            <div className="loading-dot"></div>
          </div>
        )}
        {!isLoading && (
          <img src={randomImage} alt="random" className="displayedImage" />
        )}
      </div>
    </>
  );
};
