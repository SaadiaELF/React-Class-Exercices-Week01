import React from "react";

const Dropdown = (props) => {
  return (
    <div className="dropdown">
      <label className="dropdown-label" htmlFor="pokemon-list">
        Select a Pokemon
      </label>

      <select
        onChange={props.onChange}
        className="select"
        name="pokemon-list"
        id="pokemons"
        value={props.value}
      >
        <option className="option" key="-1" value="-1" defaultValue>
          Select a Pokemon
        </option>
        {props.options.map((item, index) => {
          return (
            <option className="option" key={index} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
