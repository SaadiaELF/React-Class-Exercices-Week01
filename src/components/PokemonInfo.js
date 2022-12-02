import React from "react";
import { useParams } from "react-router-dom";

const PokemonInfo = () => {
  let { name } = useParams();
  return <h2> {name}</h2>;
};

export default PokemonInfo;
