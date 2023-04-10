import { randomImageFromApiNinjas } from '../requests/randomImageRequest';

export const Image = ({ randomImage, setRandomImage }) => {
  console.log('Image component');

  return (
    <>
      <button onClick={() => randomImageFromApiNinjas(setRandomImage)}>
        Fetch image
      </button>
      {randomImage && <img src={randomImage} alt="random" />}
    </>
  );
};
