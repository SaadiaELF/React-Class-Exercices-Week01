import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Logo from "./components/Logo";
import CaughtPokemon from "./components/CaughtPokemon";
import BestPokemon from "./components/BestPokemon";
// import PokemonCity from "./components/PokemonCity";
import pokemons from "json-pokemon";
import PokemonInfo from "./components/PokemonInfo";

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
    <BrowserRouter>
      <Link to="/best-pokemon">Best Pokemon</Link>
      <Link to="/caught-pokemon">Caught Pokemon</Link>
      <Logo handleClick={logWhenClicked} appName={appName} />

      <Routes>
        <Route
          path="/best-pokemon"
          element={<BestPokemon abilities={abilities} />}
        />
        <Route
          path="/caught-pokemon"
          element={
            <CaughtPokemon
              handleClick={catchPokemon}
              pokemonsCaught={caught}
              date={date}
              value={pokemonNameInput}
              handleChange={handleInputChange}
            />
          }
        />
        <Route path="/pokemon/:name" element={<PokemonInfo />} />
      </Routes>
      {/* <PokemonCity /> */}
    </BrowserRouter>
  );
}
export default App;
