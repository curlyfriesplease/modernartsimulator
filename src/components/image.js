import { useState } from 'react';
import { randomImageFromApiNinjas } from '../requests/randomImageRequest';
import { ShowRandomImage } from '../functions/showRandomImage';
import { GenerateRandomShapesArtwork } from '../functions/generateRandomShapesArtwork';
import { GenerateCatArt } from '../functions/generateCatArt';
import '../styles/image.css';
import '../App.css';
import { GeneratePoliticalArt } from '../functions/generatePoliticalArt';

export const Image = () => {
  const [isLoading, setIsLoading] = useState(false);

  const selectRandomImageType = () => {
    const randomInt = Math.floor(Math.random() * 3);
    // const randomInt = 1;
    switch (randomInt) {
      case 0:
        return <ShowRandomImage setIsLoading={setIsLoading} />;
      case 1:
        return <GenerateRandomShapesArtwork setIsLoading={setIsLoading} />;
      case 2:
        return <GeneratePoliticalArt setIsLoading={setIsLoading} />;
      default:
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
