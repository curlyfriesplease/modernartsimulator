import { useState, useEffect } from 'react';
import { generateArtistName } from '../functions/generateArtistName';
import { generateArtistDobAndArtworkDate } from '../functions/generateDates';
import '../styles/artCard.css';
import { generateArtTitle } from '../functions/generateArtTitle';

export const ArtCard = () => {
  const [idToRegenerateCompo, setId] = useState('123');

  const [artTitle, setArtTitle] = useState('');
  const [artistDob, setArtistDob] = useState('');
  const [artworkDate, setArtworkDate] = useState('');

  useEffect(() => {
    generateArtTitle(setArtTitle);
    generateArtistDobAndArtworkDate(setArtistDob, setArtworkDate);
  }, [idToRegenerateCompo]);

  return (
    <>
      <div className="artCardOuter" key={idToRegenerateCompo}>
        <div className="artCardInner">
          <span className="artCardBlock">
            <div className="artistName">{generateArtistName()}</div>
            <div className="artistDob">&nbsp;{artistDob}</div>
          </span>
          <span className="artCardBlock">
            <div className="artTitle">{artTitle}</div>
            <div className="artworkDate">{artworkDate}</div>
          </span>
          <div className="artCardProseBlock">
            <p className="firstParagaph">First paragraph</p>
            <p className="secondParagaph">Second paragraph</p>
            <p className="thirdParagaph">Third paragraph</p>
          </div>
        </div>
      </div>
      <button onClick={() => setId(Math.random())}>Regenerate</button>
    </>
  );
};
