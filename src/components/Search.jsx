export default function Search({ handleChange, value, handleClick }) {
  return (
    <>
      <div className="wrapper">
        <input
          type="text"
          name="search"
          placeholder="Google search"
          onChange={handleChange}
          value={value}
        />
        <button type="submit" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M5 12l14 0"></path>
            <path d="M13 18l6 -6"></path>
            <path d="M13 6l6 6"></path>
          </svg>
        </button>
      </div>
    </>
  );
}
