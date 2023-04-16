import { useEffect, useState } from 'react';
import { randomImageFromApiNinjas } from '../requests/randomImageRequest';
import { GenerateRandomShapesArtwork } from '../functions/generateRandomShapesArtwork';
import '../styles/image.css';
import '../App.css';

export const Image = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    if (randomImage) {
      setIsLoading(false);
    }
  }, [randomImage]);

  // Re-enable this to fetch a new image on page load
  // useEffect(() => {
  //   randomImageFromApiNinjas(setRandomImage);
  // }, []);

  return (
    <>
      <button
        className="debuggingButton"
        onClick={() => GenerateRandomShapesArtwork(setRandomImage)}
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
          // <img src={randomImage} alt="random" className="displayedImage" />
          <GenerateRandomShapesArtwork />
        )}
      </div>
    </>
  );
};
