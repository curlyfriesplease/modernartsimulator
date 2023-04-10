import logo from './logo.svg';
import './App.css';
import { Image } from './components/image';
import { useState } from 'react';
import { generateArtistName } from './functions/generateArtistName';
import { ArtCard } from './components/artCard';
import { DenyMobileView } from './components/denyMobileView';
import { useEffect } from 'react';

function App() {
  const [randomImage, setRandomImage] = useState(null);
  const [viewedFromMobile, setViewedFromMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState([window.innerWidth]);

  useEffect(() => {
    if (window.innerWidth > 899) {
      setViewedFromMobile(false);
    } else if (window.innerWidth < 900) {
      setViewedFromMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth < 900) {
        setViewedFromMobile(true);
      } else {
        setViewedFromMobile(false);
      }
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <>
      {viewedFromMobile && <DenyMobileView />}
      {!viewedFromMobile && (
        <div className="App">
          <div className="innerBody">
            <Image randomImage={randomImage} setRandomImage={setRandomImage} />
            <ArtCard />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
