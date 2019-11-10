import React from 'react';
import Contact from './Contact';
import Photos from './Photos';

const Content = ({ photos }) => {
  const showPhotos = window.location.href.includes('contact')
    ? { display: 'none' }
    : {};
  const showContact = !window.location.href.includes('contact')
    ? { display: 'none' }
    : {};

  return (
    <>
      <div style={showPhotos}>
        <Photos photos={photos} />
      </div>
      <div style={showContact}>
        <Contact />
      </div>
    </>
  );
};
export default Content;
