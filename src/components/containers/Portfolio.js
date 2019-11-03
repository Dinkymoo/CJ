import React from 'react';
import Photo from './Photo';
import { ThemeProvider } from 'styled-components';
import StyledPortfolio from './StyledPortfolio';
import PortfolioHeader from './PortfolioHeader';

const defaultTheme = {
  bgcolour: 'white',
  border: '1ps solid black'
};

const Portfolio = ({ portfolio }) => (
  <ThemeProvider theme={defaultTheme}>
    <StyledPortfolio>
      <PortfolioHeader active={{ title: 'Some Tile' }} />
      {portfolio.photos.map(p => (
        <Photo key={p.id} src={p.src} alt={p.alt} />
      ))}
    </StyledPortfolio>
  </ThemeProvider>
);

export default Portfolio;
