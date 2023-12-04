import React from "react";
import "./styles.css";

const FilterListToggle = ({ options, value, selectToggle }) => {
  return (
    <div className="toggle-button-group">
      {options.map(({ label, id, name }) => (
        <button
          key={id}
          className={`toggle-button ${value === name ? "selected" : ""}`}
          onClick={() => selectToggle(name)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default FilterListToggle;
