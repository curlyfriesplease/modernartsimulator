import logo from './logo.svg';
import './App.css';
import { Image } from './components/image';
import { useState } from 'react';
import { generateArtistName } from './functions/generateArtistName';
import { ArtCard } from './components/artCard';

function App() {
  const [randomImage, setRandomImage] = useState(null);

  return (
    <div className="App">
      <div className="innerBody">
        <Image randomImage={randomImage} setRandomImage={setRandomImage} />
        <ArtCard />
      </div>
    </div>
  );
}

export default App;
