import React from 'react';
const NavMenu = props => (
  <nav>
    <ul style={{ listStyleType: 'none', fontSize: '22px' }}>
      <li>
        <a href="/home" style={{ color: props.theme.fontcolour }}>
          Home
        </a>
      </li>
      <li>
        <a href="/news" style={{ color: props.theme.fontcolour }}>
          News
        </a>
      </li>
      <li>
        <a href="/contact" style={{ color: props.theme.fontcolour }}>
          Contact
        </a>
      </li>
      <li>
        <a href="/about" style={{ color: props.theme.fontcolour }}>
          About
        </a>
      </li>
    </ul>
  </nav>
);
export default NavMenu;
