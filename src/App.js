import logo from './logo.svg';
import './App.css';
import { Image } from './components/image';
import { useState } from 'react';

function App() {
  const [randomImage, setRandomImage] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <Image randomImage={randomImage} setRandomImage={setRandomImage} />
      </header>
    </div>
  );
}

export default App;
