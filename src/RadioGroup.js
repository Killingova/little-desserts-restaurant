import React, { useCallback } from "react";

export const RadioGroup = ({ name, selected, onChange, children }) => {
  const handleChange = useCallback(
    (value) => {
      onChange(value);
    },
    [onChange]
  );

  return (
    <div className="RadioGroup">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          checked: child.props.value === selected,
          onChange: () => handleChange(child.props.value),
          name, // Hier wird das `name`-Attribut an alle RadioOptionen weitergegeben
        })
      )}
    </div>
  );
};

export const RadioOption = ({ value, checked, onChange, name, children }) => {
  return (
    <div className="RadioOption">
      <input
        id={value}
        type="radio"
        name={name} // Jetzt dynamisch durch `RadioGroup` gesetzt
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
