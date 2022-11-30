import React, { useState } from "react";
import Logo from "./components/Logo";
import CaughtPokemon from "./components/CaughtPokemon";
import BestPokemon from "./components/BestPokemon";
import PokemonCity from "./components/PokemonCity";
import pokemons from "json-pokemon";

function App() {
  const appName = "CYF's";
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date = new Date().toLocaleDateString();
  // const index = Math.floor(Math.random() * pokemons.length);
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  function logWhenClicked() {
    console.log("Hi");
  }

  function catchPokemon() {
    if (pokemonNameInput) {
      setCaught(caught.concat(pokemons[pokemonNameInput - 1]));
      setPokemonNameInput("");
    }
  }

  function handleInputChange(e) {
    setPokemonNameInput(e.target.value);
  }
  return (
    <div>
      <Logo handleClick={logWhenClicked} appName={appName} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon
        handleClick={catchPokemon}
        pokemonsCaught={caught}
        date={date}
        value={pokemonNameInput}
        handleChange={handleInputChange}
      />
      <PokemonCity />
    </div>
  );
}
export default App;
