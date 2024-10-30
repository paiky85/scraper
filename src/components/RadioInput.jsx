import { useContext } from 'react';
import { LangContext } from './context';

export default function RadioInput({ label, value }) {
  const { langSearch, setLangSearch } = useContext(LangContext);
  return (
    <label>
      <input
        type="radio"
        // checked={checked === value}
        // onChange={() => onChange(value)}
        checked={langSearch === value}
        onChange={() => setLangSearch(value)}
      />
      <span style={{ marginLeft: '5px', marginRight: '20px' }}>{label}</span>
    </label>
  );
}
