import { randomImageFromApiNinjas } from '../requests/randomImageRequest';

export const Image = ({ randomImage, setRandomImage }) => {
  console.log('Image component');

  return (
    <>
      <div>hello</div>
      <img src={randomImage} />
      <button onClick={() => randomImageFromApiNinjas(setRandomImage)}>
        Click me
      </button>
      {randomImage && <img src={randomImage} alt="random" />}
      <p>imageURL is `${randomImage}`</p>
    </>
  );
};
