import React from "react";
import Logo from "./Logo";
import CaughtPokemon from "./CaughtPokemon";
import BestPokemon from "./BestPokemon";

const appName = "CYF's";
const abilities = ["Anticipation", "Adaptability", "Run-Away"];
const date = new Date().toLocaleDateString();
function logWhenClicked() {
  console.log("hi");
}

function App() {
  return (
    <div>
      <Logo handleClick={logWhenClicked} appName={appName} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
    </div>
  );
}
export default App;
