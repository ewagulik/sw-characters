import { useEffect, useState } from 'react';
import { baseUrl } from '../consts';
import '../styles/App.scss';
import Card from './Card';
import { Character } from '../types';

const App: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filter, setFilter] = useState('');
  const [avgHeight, setAvgHeight] = useState<number | null>(null);

  useEffect(() => {
    async function fetchStarwarCharacters() {
      try {
        let url = `${baseUrl}/people/`;
        const response = await fetch(url);
        const json = await response.json();
        const characterData = json.results.map(
          ({ name, height }: Character) => ({
            name,
            height,
          }),
        );
        setCharacters(characterData);
      } catch (err) {
        console.log(err);
      }
    }
    fetchStarwarCharacters();
  }, []);

  return (
    <div className='App'>
      <header>
        <label htmlFor='filter' className='u-visually-hidden'>
          Filter
        </label>
        <input
          id='filter'
          name='filter'
          placeholder='Filter...'
          type='text'
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
      </header>
      <main>
        {characters.map(character => (
          <Card key={`${character.name}-${character.height}`} {...character} />
        ))}
      </main>
      <footer>
        <div>
          <label>Include only tall</label>
          <input type='checkbox' />
        </div>
        {avgHeight && (
          <div>
            <span>Avarage height: </span>
            <span>{avgHeight}</span>
          </div>
        )}
      </footer>
    </div>
  );
};

export default App;
