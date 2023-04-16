import { useState } from 'react';
import { randomImageFromApiNinjas } from '../requests/randomImageRequest';
import { ShowRandomImage } from '../functions/showRandomImage';
import { GenerateRandomShapesArtwork } from '../functions/generateRandomShapesArtwork';
import '../styles/image.css';
import '../App.css';

export const Image = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Re-enable this to fetch a new image on page load
  // useEffect(() => {
  //   randomImageFromApiNinjas(setRandomImage);
  // }, []);

  return (
    <div className="imageContainer">
      {isLoading && (
        <div className="drawing showOnTop" id="loading">
          <div className="loading-dot"></div>
        </div>
      )}
      <ShowRandomImage setIsLoading={setIsLoading} />
    </div>
  );
};

// <GenerateRandomShapesArtwork />
