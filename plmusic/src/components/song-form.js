import React, { useState } from 'react';

const SongForm = ({ addSong, editSong, songToEdit, closeModal }) => {
  const [song, setSong] = useState(songToEdit || {
    titulo: '',
    nomeMusica: '',
    musicaTom: '',
    musicaTempoBPM: '',
    linkCifra: '',
    linkLetra: '',
    linkMusica: '',
    concluido: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (songToEdit) {
      editSong(song);
    } else {
      addSong(song);
    }
    setSong({
      titulo: '',
      nomeMusica: '',
      musicaTom: '',
      musicaTempoBPM: '',
      linkCifra: '',
      linkLetra: '',
      linkMusica: '',
      concluido: false
    });
    closeModal();
  };

  return (
    <form className="insertEditMusic" onSubmit={handleSubmit}>
      <input
        className='modal__input'
        value={song.titulo}
        onChange={(e) => setSong({ ...song, titulo: e.target.value })}
        placeholder="Título"
      />
      <input
        className='modal__input'
        value={song.nomeMusica}
        onChange={(e) => setSong({ ...song, nomeMusica: e.target.value })}
        placeholder="Nome da Música"
      />
      <input
        className='modal__input'
        value={song.musicaTom}
        onChange={(e) => setSong({ ...song, musicaTom: e.target.value })}
        placeholder="Tom da Música"
      />
      <input
        className='modal__input'
        value={song.musicaTempoBPM}
        onChange={(e) => setSong({ ...song, musicaTempoBPM: e.target.value })}
        placeholder="Tempo BPM da Música"
      />
      <input
        className='modal__input'
        value={song.linkCifra}
        onChange={(e) => setSong({ ...song, linkCifra: e.target.value })}
        placeholder="Link da Cifra"
      />
      <input
        className='modal__input'
        value={song.linkLetra}
        onChange={(e) => setSong({ ...song, linkLetra: e.target.value })}
        placeholder="Link da Letra"
      />
      <input
        className='modal__input'
        value={song.linkMusica}
        onChange={(e) => setSong({ ...song, linkMusica: e.target.value })}
        placeholder="Link da Música"
      />
      <button className='button' type="submit">{songToEdit ? 'Atualizar' : 'Adicionar'} Música</button>
    </form>
  );
};

export default SongForm;
