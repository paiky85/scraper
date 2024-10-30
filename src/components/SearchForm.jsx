import Search from './Search';
import RadioInput from './RadioInput';
import { useContext, useState } from 'react';
import { LangContext, SetStateContext } from './context';

const API_URL = import.meta.env.VITE_REACT_API_URL;

export default function Form() {
  const { search, setSearch, setResults, setIsLoading } =
    useContext(SetStateContext);
  const [langSearch, setLangSearch] = useState('cs');

  function handleChange(e) {
    e.target.value = e.target.value.replace(/\s{2,}/g, ' ');
    setSearch(e.target.value);
  }

  function handleKeyDown(e) {
    if (search === '' && e.keyCode === 32) e.preventDefault();
  }

  function handleClick() {
    setIsLoading(true);
    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({
        keyword: search,
        lang: langSearch,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.length === 0) {
          handleClick();
        } else {
          setResults(data);
          setIsLoading(false);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <LangContext.Provider value={{ langSearch, setLangSearch }}>
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
            //   checked={langSearch}
            //   onChange={setLangSearch}
          />

          <RadioInput
            label="Anglicky"
            value="en"
            //   checked={langSearch}
            //   onChange={setLangSearch}
          />
        </div>
      </form>
    </LangContext.Provider>
  );
}
