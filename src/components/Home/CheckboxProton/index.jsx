import React from "react";

export const CheckboxProton = ({ changeChecked, id, name, checked }) => {
  return (
    <div className="checkbox">
      <label>
        {name}
        <input
          type="checkbox"
          checked={checked}
          onChange={() => changeChecked(id)}
        />
      </label>
    </div>
  );
};
