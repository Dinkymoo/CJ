import React from 'react';
import Photo from './Photo';

const Photos = ({ photos }) => (
  <>
    {photos.map(p => (
      <Photo key={p.id} src={p.src} alt={p.alt} />
    ))}
  </>
);
export default Photos;
