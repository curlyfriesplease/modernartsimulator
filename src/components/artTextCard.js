import { useState, useEffect } from 'react';
import { generateArtistName } from '../functions/generateArtistName';
import { generateArtistDobAndArtworkDate } from '../functions/generateDates';
import { generateArtTitle } from '../functions/generateArtTitle';
import {
  generateFirstProseSentence,
  generateSecondProseSentence,
} from '../functions/generateProse';
import '../styles/artCard.css';

export const ArtTextCard = () => {
  const [idToRegenerateCompo, setId] = useState('123');

  const [artistName, setArtistName] = useState('');
  const [artTitle, setArtTitle] = useState('');
  const [artistDob, setArtistDob] = useState('');
  const [artworkDate, setArtworkDate] = useState('');

  useEffect(() => {
    generateArtTitle(setArtTitle);
    generateArtistName(setArtistName);
    generateArtistDobAndArtworkDate(setArtistDob, setArtworkDate);
  }, [idToRegenerateCompo]);

  return (
    <>
      <div className="artCardOuter" key={idToRegenerateCompo}>
        <div className="artCardInner">
          <span className="artCardBlock">
            <div className="artistName">{artistName}</div>
            <div className="artistDob">&nbsp;{artistDob}</div>
          </span>
          <span className="artCardBlock">
            <div className="artTitle">{artTitle}</div>
            <div className="artworkDate">{artworkDate}</div>
          </span>
          <div className="artCardProseBlock">
            <p className="firstParagaph">{generateFirstProseSentence()}</p>
            <p className="secondParagaph">{generateSecondProseSentence()}</p>
          </div>
        </div>
      </div>
      <button onClick={() => setId(Math.random())}>Regenerate</button>
    </>
  );
};
