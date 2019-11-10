import React from 'react';
import { ThemeProvider } from 'styled-components';
import Content from './Content';
import NavMenu from './NavMenu';
import PortfolioFooter from './PortfolioFooter';
import PortfolioHeader from './PortfolioHeader';
import StyledPortfolio from './StyledPortfolio';

const defaultTheme = {
  bgcolour: 'white',
  nmcolour: 'pink',
  fontcolour: 'black'
};

const Home = ({ portfolio, type }) => (
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
          <Content photos={portfolio.photos} content={type} />
        </div>
      </div>

      <PortfolioFooter />
    </StyledPortfolio>
  </ThemeProvider>
);

export default Home;
