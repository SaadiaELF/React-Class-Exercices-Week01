import React, { useState } from "react";
import Logo from "./components/Logo";
import CaughtPokemon from "./components/CaughtPokemon";
import BestPokemon from "./components/BestPokemon";
import pokemons from "json-pokemon";

function App() {
  const appName = "CYF's";
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date = new Date().toLocaleDateString();
  const index = Math.floor(Math.random() * pokemons.length);
  const [caught, setCaught] = useState([]);

  function logWhenClicked() {
    console.log("Hi");
  }

  function catchPokemon() {
    setCaught(caught.concat(pokemons[index]));
  }

  return (
    <div>
      <Logo handleClick={logWhenClicked} appName={appName} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon handleClick={catchPokemon} pokemons={caught} date={date} />
    </div>
  );
}
export default App;
