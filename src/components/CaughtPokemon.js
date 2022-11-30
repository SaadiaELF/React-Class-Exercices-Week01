import React from "react";
import PokemonMovesSelector from "./PokemonMovesSelector";
import Dropdown from "./SelectPokemon";
import pokemons from "json-pokemon";

const CaughtPokemon = (props) => {
  return (
    <div>
      <p>
        Caught {props.pokemonsCaught.length} Pokemon on {props.date}
      </p>
      {/* <input type="text" value={props.value} onChange={props.handleChange} /> */}
      <Dropdown
        value={props.value}
        options={pokemons}
        onChange={props.handleChange}
      />
      <button onClick={props.handleClick}>Catch Pokemon</button>
      <ul>
        {props.pokemonsCaught.map((pokemon,index) => {
          return (
            <li key={"pok-" + index}>
              {pokemon.name}
              <PokemonMovesSelector id={pokemon.id} name={pokemon.name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CaughtPokemon;
