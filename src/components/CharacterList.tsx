import React from 'react';
import { Characters } from '../types/character';
import Card from './Card';

interface CharacterListProps {
  characters: Characters;
  loading: boolean;
  error: boolean;
}

const CharacterList: React.FC<CharacterListProps> = ({
  characters,
  loading,
  error,
}) => {
  if (loading) {
    return (
      <ul className='content-wrapper cards-list u-relative'>
        <div className='loading-skeleton' />
        {Array.from({ length: 10 }).map((el, i) => (
          <li key={i} className='card card--placeholder'></li>
        ))}
      </ul>
    );
  }

  if (error) {
    return (
      <div className='msg-wrapper u-flex-center'>
        <p className='error-msg'>Sorry, we couldn't load the data :(</p>
      </div>
    );
  }

  if (characters.length === 0) {
    return (
      <div className='msg-wrapper u-flex-center'>
        <p className='error-msg'>No results for this criteria</p>
      </div>
    );
  }

  return (
    <ul className='content-wrapper cards-list'>
      {characters.map(character => (
        <li key={character.name}>
          <Card {...character} />
        </li>
      ))}
    </ul>
  );
};

export default React.memo(CharacterList);
