import React from 'react';
const Photo = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    style={{
      width: '400px',
      height: '300px',
      margin: '1%',
      padding: '5%'
    }}
  />
);
export default Photo;
