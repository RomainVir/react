import "./styles.css";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [pokemon, setPokemon] = useState("");
  const [getPokemon, setGetPokemon] = useState({});

  function findPokemon(click) {
    setPokemon(click.target.value);
  }

  function guardarPokemon(click) {
    click.preventDefault();
    setGetPokemon(pokemon);
  }
  useEffect(
    function () {
      async function fetchPokemon() {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${getPokemon}/`
        );
        const pokemons = await response.json();
        setGetPokemon(pokemons);
      }
      fetchPokemon();
    },
    [getPokemon]
  );

  return (
    <div className="App">
      <h1>Find your Pokemon</h1>
      <br />
      <form onSubmit={guardarPokemon}>
        <input value={pokemon} onChange={findPokemon} />
        <br />
        <br />
        <button type="submit">Search!</button>
      </form>
      {getPokemon ? (
        <div>
          <h2>{getPokemon.name}</h2>
      <img src={getPokemon.sprites.front_default} alt=""/>
        </div>
      ) : (
        <h3> No pokemon </h3>
      )}
    </div>
  );
}
