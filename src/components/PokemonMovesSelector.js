import React, { useState } from "react";
import PokemonMoves from "./PokemonMoves";

function PokemonMovesSelector(props) {
  const [show, setShow] = useState(false);
  function showPokemonMoves() {
    show ? setShow(false) : setShow(true);
  }
  return (
    <div>
      <button onClick={showPokemonMoves}>Fetch {props.name}</button>
      {show ? <PokemonMoves pokemonId={props.id} /> : null}
    </div>
  );
}

export default PokemonMovesSelector;
