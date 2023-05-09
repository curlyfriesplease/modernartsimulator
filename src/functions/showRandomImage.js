import { useEffect, useState } from 'react';
import { randomImageFromApiNinjas } from '../requests/randomImageRequest';
import '../styles/image.css';

export const ShowRandomImage = ({ setIsLoading }) => {
  const [randomImage, setRandomImage] = useState(null);

  console.log('1 ShowRandomImage');

  useEffect(() => {
    setIsLoading(true);
    if (!randomImage) {
      randomImageFromApiNinjas(setRandomImage, setIsLoading);
    }
  }, []);

  useEffect(() => {
    if (randomImage) {
      setIsLoading(false);
    }
  }, [randomImage]);

  console.log(`randomImage: ${randomImage}`);

  return (
    <>
      {randomImage && (
        <img src={randomImage} alt="random" className="displayedImage" />
      )}
    </>
  );
};
