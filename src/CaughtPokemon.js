import React, { useState } from "react";
import pokemons from "json-pokemon";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  function catchPokemon() {
    const index = Math.floor(Math.random() * pokemons.length);
    setCaught(caught.concat(pokemons[index].name));
  }
  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <ul>
        {caught.map((pokemon, index) => {
          return <li key={index}>{pokemon}</li>;
        })}
      </ul>
    </div>
  );
};

export default CaughtPokemon;
