// RadioOption.js
import React from "react";

const RadioOption = ({ value, checked, onChange }) => {
  return (
    <label className="radio-option">
      <input type="radio" value={value} checked={checked} onChange={onChange} />
      {value}
    </label>
  );
};

export default RadioOption;
