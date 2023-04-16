import { useEffect, useState } from 'react';
import { randomImageFromApiNinjas } from '../requests/randomImageRequest';
import '../styles/image.css';

export const ShowRandomImage = ({ setIsLoading }) => {
  const [randomImage, setRandomImage] = useState(null);

  //   useEffect(() => {
  //     if (randomImage) {
  //       setIsLoading(false);
  //     }
  //   }, [randomImage]);

  useEffect(() => {
    if (!randomImage) {
      randomImageFromApiNinjas(setRandomImage, setIsLoading);
    }
  }, []);

  console.log(`randomImage: ${randomImage}`);

  return (
    <>
      {randomImage && (
        <img src={randomImage} alt="random" className="displayedImage" />
      )}
    </>
  );
};
