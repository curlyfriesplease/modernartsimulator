import { useState } from 'react';
import { randomImageFromApiNinjas } from '../requests/randomImageRequest';
import { ShowRandomImage } from '../functions/showRandomImage';
import { GenerateRandomShapesArtwork } from '../functions/generateRandomShapesArtwork';
import { GenerateCatArt } from '../functions/generateCatArt';
import '../styles/image.css';
import '../App.css';

export const Image = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Re-enable this to fetch a new image on page load
  // useEffect(() => {
  //   randomImageFromApiNinjas(setRandomImage);
  // }, []);

  const selectRandomImageType = () => {
    // const randomInt = Math.floor(Math.random() * 3);
    const randomInt = 3;
    if (randomInt === 0) {
      return <ShowRandomImage setIsLoading={setIsLoading} />;
    } else if (randomInt === 1) {
      return <GenerateRandomShapesArtwork />;
    } else {
      return (
        <GenerateCatArt isLoading={isLoading} setIsLoading={setIsLoading} />
      );
    }
  };

  return (
    <div className="imageContainer">
      {isLoading && (
        <div className="drawing showOnTop" id="loading">
          <div className="loading-dot"></div>
        </div>
      )}
      {selectRandomImageType()}
    </div>
  );
};
