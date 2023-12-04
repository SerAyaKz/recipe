import React from "react";
import Slider from "react-slider";
import "./styles.css";

const SliderProton = ({ name, value, changeDiff, max }) => {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Slider
        className="slider"
        value={value}
        onChange={changeDiff}
        min={0}
        max={max}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <label htmlFor="minPrice">Min {name}:</label>
          <input
            type="number"
            id="minPrice"
            value={value[0]}
            onChange={(e) => changeDiff([+e.target.value, value[1]])}
          />
        </div>
        <div>
          <label htmlFor="maxPrice">Max {name}:</label>
          <input
            type="number"
            id="maxPrice"
            value={value[1]}
            onChange={(e) => changeDiff([value[0], +e.target.value])}
          />
        </div>
      </div>
    </div>
  );
};

export default SliderProton;
