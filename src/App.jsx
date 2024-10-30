import { useState } from 'react';
import { SetStateContext } from './components/context';
import { v4 as uuidv4 } from 'uuid';
import SearchForm from './components/SearchForm';
import SaveJSON from './components/SaveJSON';
import SaveCSV from './components/SaveCSV';
import './App.css';

function App() {
  const [results, setResults] = useState(null);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <SetStateContext.Provider
      value={{ search, setResults, setSearch, setIsLoading }}
    >
      <div className="container">
        <div className="search">
          <SearchForm />
        </div>
        <div className="load">{isLoading && <p>Searching...</p>}</div>
        <div className="list">
          <ul>
            {results &&
              Array.isArray(results) &&
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
          {results && <p>{results.message}</p>}
          <div className="btn">
            {results && Array.isArray(results) && (
              <SaveJSON data={results} fName={search} />
            )}
            {results && Array.isArray(results) && (
              <SaveCSV data={results} fName={search} />
            )}
          </div>
        </div>
      </div>
    </SetStateContext.Provider>
  );
}

export default App;

/* 

// import Search from './components/Search';
// import RadioInput from './components/RadioInput';



  // const [langSearch, setLangSearch] = useState('cs');

  // function handleChange(e) {
  //   e.target.value = e.target.value.replace(/\s{2,}/g, ' ');
  //   setSearch(e.target.value);
  // }

  // function handleKeyDown(e) {
  //   if (search === '' && e.keyCode === 32) e.preventDefault();
  // }

  // function handleClick() {
  //   setIsLoading(true);
  //   fetch('http://localhost:3000', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       keyword: search,
  //       lang: langSearch,
  //     }),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.length === 0) {
  //         handleClick();
  //       } else {
  //         setResults(data);
  //         setIsLoading(false);
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

           <form method="post" action="/" onSubmit={e => e.preventDefault()}>
            <Search
              type="text"
              name="search"
              placeholder="Google search"
              value={search}
              handleChange={handleChange}
              handleKeyDown={handleKeyDown}
              handleClick={handleClick}
            />
            <div className="radio">
              <RadioInput
                label="Česky"
                value="cs"
                checked={langSearch}
                onChange={setLangSearch}
              />
  
              <RadioInput
                label="Anglicky"
                value="en"
                checked={langSearch}
                onChange={setLangSearch}
              />
            </div>
          </form> 

*/
