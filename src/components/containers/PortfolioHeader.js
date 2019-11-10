import React from 'react';
import PortFolioHeader from '../assets/portfolio-header.webp';

const PortfolioHeader = () => (
  <img
    src={PortFolioHeader}
    alt="portfolio-header"
    style={{
      width: '100%',
      height: '200px',
      position: 'fixed',
      zIndex: '1'
    }}
  />
);
export default PortfolioHeader;
