import React, { useState, useEffect } from 'react';
import landing from '../../components/assets/landing.webp';
import { Link } from 'react-router-dom';
import Emerald from '../../components/assets/Emerald.png';
import Portfolio from './Portfolio';

const photos = [
  { id: 1, src: '../src/components/assets/logo.svg', alt: 'alt1' },
  { id: 2, src: Emerald, alt: 'alt2' }
];

const photos2 = [
  { id: 3, src: '../src/components/assets/logo.svg', alt: 'alt3' },
  { id: 4, src: Emerald, alt: 'alt4' }
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
        <header className="App-header">
          <img src={landing} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          />
        </header>
        <Portfolio portfolio={state.photos} />
      </div>
      ;
    </>
  );
};
export default Landing;
