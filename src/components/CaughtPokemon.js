import React from "react";
import PokemonMovesSelector from "./PokemonMovesSelector";

const CaughtPokemon = (props) => {
  return (
    <div>
      <p>
        Caught {props.pokemons.length} Pokemon on {props.date}
      </p>
      <button onClick={props.handleClick}>Catch Pokemon</button>
      <ul>
        {props.pokemons.map((pokemon) => {
          return (
            <li key={"pok-" + pokemon.id}>
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
