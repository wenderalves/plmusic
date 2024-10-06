import React from 'react';
import './header.css';

const Header = ({ toggleMenu }) => {
  return (
    <header>
      <h1>Playlist Musicas</h1>
      <button className="button__openmenu" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
      </button>
    </header>
  );
};

export default Header;
