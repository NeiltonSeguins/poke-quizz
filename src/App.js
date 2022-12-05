import "./App.css";
import { useEffect, useState } from "react";
import { Card } from "./components/Card";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonImage, setPokemonImage] = useState("");

  useEffect(() => {
    async function fetchData() {
      const fetchedPokemons = [];

      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const pokeAPI = await response.json();

      pokeAPI.results.forEach((result) => {
        fetchedPokemons.push({
          id: pokeAPI.results.indexOf(result) + 1,
          name: result.name,
        });
      });

      setPokemons(fetchedPokemons);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchImage() {
      const pokemon = pokemons[8].id;

      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
      );
      const pokeImages = await response.json();
      setPokemonImage(pokeImages.sprites.other.home.front_default);
    }

    fetchImage();
  });

  return (
    <div className="App">
      <img
        src="https://camo.githubusercontent.com/5d1fe59c3f0e4cfb5480bb8d8b1eb3ba58906acef846904fde8afcc5f773adbb/68747470733a2f2f692e696d6775722e636f6d2f583962314b75362e706e67"
        alt="Who's that pokemon"
      />
      <Card image={pokemonImage} />
    </div>
  );
}

export default App;
