import React from 'react';
import Photo from './Photo';
import { ThemeProvider } from 'styled-components';
import StyledPortfolio from './StyledPortfolio';
import StyledNavMenu from './StyledNavMenu';
import PortfolioHeader from './PortfolioHeader';
import PortfolioFooter from './PortfolioFooter';
import NavMenu from './NavMenu';
import Content from './Content';

const defaultTheme = {
  bgcolour: 'white',
  nmcolour: 'pink',
  fontcolour: 'black'
};

const Portfolio = ({ portfolio }) => (
  <ThemeProvider theme={defaultTheme}>
    <StyledPortfolio>
      <PortfolioHeader />
      <div className="row">
        <div
          className="col-lg-2 col-md-0 col-sm-0"
          style={{
            float: 'left',
            paddingTop: '230px',
            background: 'lightGrey'
          }}
        >
          <NavMenu theme={defaultTheme} />
        </div>
        <div className="col-lg-1 col-md-3 col-sm-3" />

        <div
          className="col-lg-9 col-md-9 col-sm-9"
          style={{
            paddingTop: '230px',
            float: 'right'
          }}
        >
          <Content photos={portfolio.photos} />
        </div>
      </div>

      <PortfolioFooter />
    </StyledPortfolio>
  </ThemeProvider>
);

export default Portfolio;
