import PokemonForm from "../../componentes/PokemonForm/pokemonForm";
import { useState, useEffect } from "react";
import Pokemon from "../../componentes/Pokemon/pokemon";

const initialMessage = "There is not pokemon yet";
export default function PokemonView() {
  const [pokemonWanted, setPokemonWanted] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  const [message, setMessage] = useState();

  useEffect(
    function () {
      if (pokemonWanted) {
        async function fetchPokemon() {
          const response = await fetch(
            `https://pokeapi.co/api/y2/pokemon/${pokemonWanted}`
          );
          if (response.status !== 200) {
            setMessage("This pokemon does not exist");
            setPokemon(null);
          }
          const data = await response.json();
          setPokemon(data);
        }
        fetchPokemon();
      }
    },

    [pokemonWanted]
  );

  return (
    <>
      <h1>Find your Pokemon </h1>
      <PokemonForm setPokemon={setPokemonWanted} />
      <Pokemon pokemon={pokemon} message={message} />
    </>
  );
}
