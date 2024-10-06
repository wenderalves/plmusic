import React, { useState, useRef, useCallback } from 'react';
import './card.css';

const SongCard = ({ song, index, editSong, deleteSong, editMode }) => {
  const [longPressTimer, setLongPressTimer] = useState(null);
  const cardRef = useRef(null);

  const handleLongPress = useCallback(() => {
    if (window.confirm('Tem certeza que deseja excluir essa música da lista?')) {
      deleteSong(index);
    }
  }, [deleteSong, index]);

  const handleTouchStart = useCallback(() => {
    const timer = setTimeout(() => {
      handleLongPress();
    }, 2000);
    setLongPressTimer(timer);
  }, [handleLongPress]);

  const handleTouchEnd = useCallback(() => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
    }
  }, [longPressTimer]);

  return (
    <li
      key={index}
      ref={cardRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
    >
      <input
        type="checkbox"
        hidden="true"
        checked={song.concluido}
        id={'ckc-' + index}
        onChange={() => editSong(index, 'concluido', !song.concluido)}
      />
      {editMode ? (
        <div className='card-edit'>
          <input
            value={song.titulo}
            onChange={(e) => editSong(index, 'titulo', e.target.value)}
            placeholder="Título"
          />
          <input
            value={song.nomeMusica}
            onChange={(e) => editSong(index, 'nomeMusica', e.target.value)}
            placeholder="Nome da Música"
          />
          <input
            value={song.musicaTom}
            onChange={(e) => editSong(index, 'musicaTom', e.target.value)}
            placeholder="Tom da Música"
          />
          <input
            value={song.musicaTempoBPM}
            onChange={(e) => editSong(index, 'musicaTempoBPM', e.target.value)}
            placeholder="Tempo BPM da Música"
          />
          <input
            value={song.linkCifra}
            onChange={(e) => editSong(index, 'linkCifra', e.target.value)}
            placeholder="Link da Cifra"
          />
          <input
            value={song.linkLetra}
            onChange={(e) => editSong(index, 'linkLetra', e.target.value)}
            placeholder="Link da Letra"
          />
          <input
            value={song.linkMusica}
            onChange={(e) => editSong(index, 'linkMusica', e.target.value)}
            placeholder="Link da Música"
          />
        </div>
      ) : (
        <React.Fragment>
          <label htmlFor={'ckc-' + index} className={song.concluido ? 'card concluido' : 'card'}>
            <span>{song.titulo}</span>
            <h3>{song.nomeMusica}</h3>
            <div className="card__dados">
              <div className='card__infos--footer'>
                <div>Tom: {song.musicaTom}</div>
                <div>Tempo: {song.musicaTempoBPM} BPM</div>
              </div>
              <div className='card__links'>
                {song.linkCifra && song.linkCifra !== "" && (
                  <a className="card__button" href={song.linkCifra} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" viewBox="0 0 24 24"><path fill="currentColor" d="M19.59 3H22v2h-1.59l-4.24 4.24c-.37-.56-.85-1.04-1.41-1.41zM12 8a4 4 0 0 1 4 4a3.99 3.99 0 0 1-3 3.87V16a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5h.13c.45-1.76 2.04-3 3.87-3m0 2.5a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5m-5.06 3.74l-.71.7l2.83 2.83l.71-.71z"></path></svg>
                  </a>
                )}
                {song.linkLetra && song.linkLetra !== "" && (
                  <a className="card__button" href={song.linkLetra} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22px" viewBox="0 0 256 256"><g fill="currentColor"><path d="M156.5 151L59 222.45a8 8 0 0 1-10.38-.79l-14.3-14.3a8 8 0 0 1-.77-10.36L105 99.5a64 64 0 0 0 51.48 51.5Z" opacity=".2"></path><path d="M168 16a72.07 72.07 0 0 0-72 72a73 73 0 0 0 .63 9.42l-69.51 94.8A15.93 15.93 0 0 0 28.71 213L43 227.29a15.93 15.93 0 0 0 20.78 1.59l94.81-69.53a73 73 0 0 0 9.41.65a72 72 0 1 0 0-144m56 72a55.72 55.72 0 0 1-11.16 33.52l-78.35-78.36A56 56 0 0 1 224 88M54.32 216L40 201.68L102.14 117A72.37 72.37 0 0 0 139 153.86ZM112 88a55.67 55.67 0 0 1 11.16-33.51l78.34 78.34A56 56 0 0 1 112 88m-2.35 58.34a8 8 0 0 1 0 11.31l-8 8a8 8 0 1 1-11.31-11.31l8-8a8 8 0 0 1 11.33-.01Z"></path></g></svg>
                  </a>
                )}
                {song.linkMusica && song.linkMusica !== "" && (
                  <a className="card__button" href={song.linkMusica} target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="22px" viewBox="0 0 32 32"><path fill="currentColor" d="M25 4H10a2 2 0 0 0-2 2v14.556A3.96 3.96 0 0 0 6 20a4 4 0 1 0 4 4V12h15v8.556A3.96 3.96 0 0 0 23 20a4 4 0 1 0 4 4V6a2 2 0 0 0-2-2M6 26a2 2 0 1 1 2-2a2 2 0 0 1-2 2m17 0a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2M10 6h15v4H10Z"></path></svg></a>
                )}
              </div>
            </div>
          </label>


        </React.Fragment>
      )}
    </li>
  );
};

export default SongCard;
