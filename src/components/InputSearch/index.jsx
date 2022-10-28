import { useState, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";
import s from "./InputSearch.module.scss";

const InputSearch = ({ setName }) => {
  const [term, setTerm] = useState("");
  const debounce = useDebounce(term, 500);
  useEffect(() => {
    setName(debounce);
  }, [debounce]);

  return (
    <div className={s.search__input}>
      <div className={s.input__wrapper}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="20px"
            height="20px"
          >
            <title>Search</title>
            <path d="M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z" />
          </svg>
        </span>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search for a country..."
        />
      </div>
    </div>
  );
};

export default InputSearch;
