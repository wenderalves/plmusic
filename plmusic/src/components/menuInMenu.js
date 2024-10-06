import React from 'react';
import './menu.css';

const SlideInMenu = ({ isOpen, closeMenu, exportJSON, importJSON, clearPlaylist }) => {
  return (
    <div className={`slide-in-menu ${isOpen ? 'open' : ''}`}>
      <section className="menu_header">
        <button className="button-menu__close" onClick={closeMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="22px" viewBox="0 0 24 24"><path fill="currentColor" d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></path></svg>
        </button>
      </section>
      <section className='menu__logo'>
        <img src="./icon-192x192.png" width="30%" alt="Logo" />
        <h4>PlMusic v1.0</h4>
      </section>
      <section className="menu__buttons">
        <button className="button-menu--full" onClick={exportJSON}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 32 32"><path fill="currentColor" d="M13 21h13.17l-2.58 2.59L25 25l5-5l-5-5l-1.41 1.41L26.17 19H13z"></path><path fill="currentColor" d="M22 14v-4a1 1 0 0 0-.29-.71l-7-7A1 1 0 0 0 14 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2h-2v2H4V4h8v6a2 2 0 0 0 2 2h6v2Zm-8-4V4.41L19.59 10Z"></path></svg>
          Exportar
        </button>
        <label className="button-menu--full" htmlFor="import-json">
          <svg xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 32 32"><path fill="currentColor" d="M28 19H14.83l2.58-2.59L16 15l-5 5l5 5l1.41-1.41L14.83 21H28z"></path><path fill="currentColor" d="M24 14v-4a1 1 0 0 0-.29-.71l-7-7A1 1 0 0 0 16 2H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2h-2v2H6V4h8v6a2 2 0 0 0 2 2h6v2Zm-8-4V4.41L21.59 10Z"></path></svg>
          Importar
        </label>
        <input
          id="import-json"
          type="file"
          accept=".json"
          style={{ display: 'none' }}
          onChange={importJSON}
        />
        <button className="button-menu--full" onClick={clearPlaylist}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 32 32"><path fill="currentColor" d="M26 20h-6v-2h6zm4 8h-6v-2h6zm-2-4h-6v-2h6z"></path><path fill="currentColor" d="M17.003 20a4.9 4.9 0 0 0-2.404-4.173L22 3l-1.73-1l-7.577 13.126a5.7 5.7 0 0 0-5.243 1.503C3.706 20.24 3.996 28.682 4.01 29.04a1 1 0 0 0 1 .96h14.991a1 1 0 0 0 .6-1.8c-3.54-2.656-3.598-8.146-3.598-8.2m-5.073-3.003A3.11 3.11 0 0 1 15.004 20c0 .038.002.208.017.469l-5.9-2.624a3.8 3.8 0 0 1 2.809-.848M15.45 28A5.2 5.2 0 0 1 14 25h-2a6.5 6.5 0 0 0 .968 3h-2.223A16.6 16.6 0 0 1 10 24H8a17.3 17.3 0 0 0 .665 4H6c.031-1.836.29-5.892 1.803-8.553l7.533 3.35A13 13 0 0 0 17.596 28Z"></path></svg>
          Limpar Playlist
        </button>
      </section>
      <section className="menu__footer">
        <p>Desenvolvido por <br/> <a href="https://github.com/wenderalves" target="_blank" rel="noopener noreferrer">Wender Alves</a></p>
      </section>
    </div>
  );
};

export default SlideInMenu;
