import React, { useState, useEffect } from 'react';
import SongCard from './components/card';
import './App.css';
import SongForm from './components/song-form';
import Header from './components/header';
import SlideInMenu from './components/menuInMenu';



function App() {

  const [playlist, setPlaylist] = useState([]);
  const [addMusica, setAddMusica] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedPlaylist = localStorage.getItem('playlist');
    if (savedPlaylist) {
      setPlaylist(JSON.parse(savedPlaylist));
    }
  }, []);

  const editSong = (index, field, value) => {
    const updatedPlaylist = [...playlist];
    updatedPlaylist[index][field] = value;
    setPlaylist(updatedPlaylist);
    localStorage.setItem('playlist', JSON.stringify(updatedPlaylist));
  };

  const addSong = (song) => {
    const updatedPlaylist = [...playlist, song];
    setPlaylist(updatedPlaylist);
    localStorage.setItem('playlist', JSON.stringify(updatedPlaylist));
  };

  const showAddMusica = (value) => {
    setAddMusica(value);
    setEditMode(false);
  };

  const exportJSON = () => {
    const nome = prompt("Qual o nome para o arquivo para exportar?", "playlist.json");
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(playlist, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", nome);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const importJSON = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const parsedPlaylist = JSON.parse(e.target.result);
          setPlaylist(parsedPlaylist);
          localStorage.setItem('playlist', JSON.stringify(parsedPlaylist));
          alert('Playlist importada com sucesso!');
        } catch (error) {
          console.error('Erro ao importar a playlist:', error);
          alert('Erro ao importar o JSON. Verifique se o arquivo está correto.');
        }
      };
      reader.readAsText(file);
    }
  };

  const deleteSong = (index) => {
    const updatedPlaylist = playlist.filter((_, i) => i !== index);
    setPlaylist(updatedPlaylist);
    localStorage.setItem('playlist', JSON.stringify(updatedPlaylist));
  };

  const clearPlaylist = () => {
    setPlaylist([]);
    localStorage.removeItem('playlist');
    alert('Playlist limpa!');
  };

  return (
    <div className="app">
      <Header toggleMenu={() => setMenuOpen(!menuOpen)} />
      <SlideInMenu
        isOpen={menuOpen}
        closeMenu={() => setMenuOpen(false)}
        exportJSON={exportJSON}
        importJSON={importJSON}
        clearPlaylist={clearPlaylist}
      />
      <main>
        <div className="controls">
          <button className="button" onClick={() => setEditMode(!editMode)}>
            {editMode ? (
                <React.Fragment>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 32 32"><path fill="currentColor" d="m27.71 9.29l-5-5A1 1 0 0 0 22 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V10a1 1 0 0 0-.29-.71M12 6h8v4h-8Zm8 20h-8v-8h8Zm2 0v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8H6V6h4v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6.41l4 4V26Z"></path></svg>
                    Salvar Edições
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 32 32"><path fill="currentColor" d="M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4zm-5-5L24 7.6l-3 3L17.4 7zM6 22v-3.6l10-10l3.6 3.6l-10 10z"></path></svg>
                    Editar Músicas
                </React.Fragment>
            )}
          </button>
          <button className="button" onClick={() => showAddMusica(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13v3q0 .425.288.713T12 17t.713-.288T13 16v-3h3q.425 0 .713-.288T17 12t-.288-.712T16 11h-3V8q0-.425-.288-.712T12 7t-.712.288T11 8v3H8q-.425 0-.712.288T7 12t.288.713T8 13zm1 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></path></svg>
            Adicionar Musica
          </button>
        </div>
        <ul>
          {playlist.map((song, index) => (
            <SongCard
              key={index}
              song={song}
              index={index}
              editSong={editSong}
              deleteSong={deleteSong}
              editMode={editMode}
            />
          ))}
        </ul>
      </main>
      {addMusica ?
        <React.Fragment>
        <section className='modal'>
          <div className='modal__header'>
            <h2>Adicionar Musica</h2>
            <button className='button__close' onClick={() => showAddMusica(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22px" viewBox="0 0 24 24"><path fill="currentColor" d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></path></svg>
            </button>
          </div>
          <div className="modal__content">
            <SongForm addSong={addSong} closeModal={() => showAddMusica(false)} />
          </div>
        </section>
        <div className="modal__overlay" onClick={() => showAddMusica(false)}>
        </div>
        </React.Fragment>: ''
      }
    </div>
  );
}

export default App;
