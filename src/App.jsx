import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SaveCSV from './components/SaveCSV';
import SaveJSON from './components/SaveJSON';
import Search from './components/Search';
import './App.css';

function App() {
  const [results, setResults] = useState(null);
  const [search, setSearch] = useState('');

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleClick() {
    fetch('https://scraper-api-five.vercel.app', {
      method: 'POST',
      body: JSON.stringify({
        keyword: search,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(data => {
        setResults(data);
      });
  }

  return (
    <div className="container">
      <div className="search">
        <div className="wrapper">
          <form method="post" action="/" onSubmit={e => e.preventDefault()}>
            <Search
              type="text"
              name="search"
              placeholder="Google search"
              handleChange={handleChange}
              value={search}
              handleClick={handleClick}
            />
          </form>
        </div>
      </div>
      <div className="list">
        <ul>
          {results &&
            results.map(result => (
              <li key={uuidv4()}>
                <a href={result.link} target="_blank">
                  {result.title}
                </a>
                <p>{result.link}</p>
                <p>{result.snippet}</p>
                <p>{result.displayedLink}</p>
              </li>
            ))}
        </ul>
        <div className="btn">
          {results && <SaveJSON data={results} fName={search} />}
          {results && <SaveCSV data={results} fName={search} />}
        </div>
      </div>
    </div>
  );
}

export default App;
