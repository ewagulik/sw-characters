import { useDeferredValue, useEffect, useState } from 'react';
import { Characters, CharacterApiData } from '../types/character';
import { filterTall, filterCharactersByName } from '../utils';
import AvarageCount from './AvarageCount';
import CharacterList from './CharacterList';
import TextField from './TextField';
import ToggleBtn from './ToggleButton';
import '../styles/index.scss';

const App: React.FC = () => {
  const [characters, setCharacters] = useState<Characters>([]);
  const [filter, setFilter] = useState('');
  const [isTall, toggleTall] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const deferredFilter = useDeferredValue(filter);

  useEffect(() => {
    fetchSWCharacters();
  }, []);

  const fetchSWCharacters = async () => {
    setLoading(true);
    try {
      let url = `${process.env.REACT_APP_PUBLIC_URL}/people/`;
      const response = await fetch(url);
      const json = await response.json();
      const characterData = json.results.map(
        ({ name, height }: CharacterApiData) => ({
          name,
          height: Number(height),
        }),
      );
      setCharacters(characterData);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(true);
      setLoading(false);
    }
  };

  const filteredCharacters = isTall
    ? filterTall(filterCharactersByName(characters, deferredFilter))
    : filterCharactersByName(characters, deferredFilter);

  return (
    <div>
      <header className='header u-flex-center'>
        <div className='content-wrapper'>
          <TextField
            id='name-filter'
            label='Filter...'
            value={filter}
            handleChange={e => setFilter(e.target.value)}
          />
        </div>
      </header>
      <main className='main'>
        <CharacterList
          characters={filteredCharacters}
          loading={loading}
          error={error}
        />
      </main>
      <footer className='footer'>
        <div className='content-wrapper footer__content'>
          <ToggleBtn
            id='toggle-tall'
            checked={isTall}
            label='Include onlly tall'
            handleChange={() => toggleTall(!isTall)}
          />
          {!!filteredCharacters.length && (
            <AvarageCount characters={filteredCharacters} />
          )}
        </div>
      </footer>
    </div>
  );
};

export default App;
