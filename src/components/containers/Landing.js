import React, { useEffect, useState } from 'react';
import Bracelet from '../../components/assets/bracelet.jpg';
import Charm from '../../components/assets/charm.jpg';
import Earring from '../../components/assets/earring.webp';
import Emerald from '../../components/assets/Emerald.png';
import Necklace from '../../components/assets/necklace.jpg';
import Pendant from '../../components/assets/pendant.jpg';
import Portfolio from './Portfolio';

const photos = [
  { id: 1, src: Earring, alt: 'alt1' },
  { id: 2, src: Emerald, alt: 'alt2' },
  { id: 3, src: Necklace, alt: 'alt3' },
  { id: 4, src: Bracelet, alt: 'alt4' },
  { id: 5, src: Charm, alt: 'alt5' },
  { id: 6, src: Pendant, alt: 'alt6' },
  { id: 7, src: Bracelet, alt: 'alt7' },
  { id: 8, src: Charm, alt: 'alt8' },
  { id: 9, src: Pendant, alt: 'alt9' }
];

const Landing = () => {
  const [state, setState] = useState({
    photos: { photos }
  });
  //   const [effectState, setEffectState] = useState('');
  // };
  const updateValue = e => {
    setState(e.target.value);
  };

  useEffect(() => {
    console.log('state:', state);
    return () => {
      //cleanup;
    };
  }, [state]);
  return (
    <>
      <div className="App">
        <Portfolio portfolio={state.photos} />
      </div>
      ;
    </>
  );
};
export default Landing;
