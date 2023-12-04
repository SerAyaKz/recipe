import React from "react";
import "./styles.css";

const SearchBar = ({ value, changeInput }) => (
  <div className="searchBar-wrap">
    🔍
    <input
      type="text"
      placeholder="Shelpek"
      value={value}
      onChange={changeInput}
    />
  </div>
);

export default SearchBar;
