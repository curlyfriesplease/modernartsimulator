import { useEffect } from 'react';
import '../styles/politicalArt.css';
const politicalGraffitiA = require('../sources/politicalGraffitiA.json');
const politicalGraffitiB = require('../sources/politicalGraffitiB.json');

export const GeneratePoliticalArt = ({ setIsLoading }) => {
  console.log('3 GeneratePoliticalArt');

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const randomPoliticalGraffitiPhrase = () => {
    const randomPoliticalGraffitiA =
      politicalGraffitiA[Math.floor(Math.random() * politicalGraffitiA.length)];
    const randomPoliticalGraffitiB =
      politicalGraffitiB[Math.floor(Math.random() * politicalGraffitiB.length)];
    return randomPoliticalGraffitiA + '\n IS \n' + randomPoliticalGraffitiB;
  };

  const returnRandomPoliticalContainer = (phrase) => {
    const randomNumber = Math.floor(Math.random() * 5);
    console.log('generatePoiticalArt randomNumber: ', randomNumber);

    switch (randomNumber) {
      case 0:
        return (
          <div className="politicalContainerBackground1 fullHeightAndWidth">
            <div className="politicalContainerBackgroundText">{phrase}</div>
          </div>
        );
      case 1:
        return (
          <div className="politicalContainerBackground2 fullHeightAndWidth">
            <div className="politicalContainerBackgroundText">{phrase} </div>
          </div>
        );
      case 2:
        return (
          <div className="politicalContainerBackground3 fullHeightAndWidth">
            <div className="politicalContainerBackgroundText">{phrase} </div>
          </div>
        );
      case 3:
        return (
          <div className="politicalContainerBackground4 fullHeightAndWidth">
            <div className="politicalContainerBackgroundText">{phrase} </div>
          </div>
        );
      default:
        return (
          <div className="politicalContainerBackground5 fullHeightAndWidth">
            <div className="politicalContainerBackgroundText">{phrase} </div>
          </div>
        );
    }
  };

  return (
    <div id="politicalContainer" className="fullHeightAndWidth">
      {returnRandomPoliticalContainer(randomPoliticalGraffitiPhrase())}
    </div>
  );
};
