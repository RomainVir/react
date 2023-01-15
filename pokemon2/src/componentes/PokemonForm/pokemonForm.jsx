import { useState } from "react";

export default function PokemonForm({ setPokemon }) {
  const [wantedPokemon, setWantedPokemon] = useState("");

  function handlePokemon(e) {
    setWantedPokemon(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    //logica para mandar el pokemon que el usuaio ha introducido
    setPokemon(wantedPokemon.toLowerCase());
    setWantedPokemon("");
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        className="form-control mb-3"
        type="text"
        placeholder="Write a name"
        value={wantedPokemon}
        onChange={handlePokemon}
      />
      <button
        className=" bn form-control mb-3 ml-auto btn-success"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
