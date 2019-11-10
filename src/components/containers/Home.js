import React from 'react';
import { ThemeProvider } from 'styled-components';
import Content from './Content';
import NavMenu from './NavMenu';
import StyledPortfolio from './StyledPortfolio';
import Photo from './Photos';

const defaultTheme = {
  bgcolour: 'white',
  nmcolour: 'pink',
  fontcolour: 'black'
};

const Home = ({ header, footer, portfolio }) => (
  <ThemeProvider theme={defaultTheme}>
    <StyledPortfolio>
      <header>
        <img
          src={header.header.src}
          alt={header.header.alt}
          style={{
            width: '100%',
            height: '200px',
            position: 'fixed',
            zIndex: '1'
          }}
        />
      </header>
      <content>
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
      </content>
      <footer
        style={{ background: 'lightGrey', width: '100%', height: '150px' }}
      >
        {/* <img
          src={footer.footer.src}
          alt={footer.footer.alt} */}
        {/* /> */}
      </footer>
    </StyledPortfolio>
  </ThemeProvider>
);

export default Home;
