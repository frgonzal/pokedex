import { POKEAPI_URL } from "@/constants";
import { Pokemon, PokemonData } from "@/types/pokemons";
import { useState, useEffect } from "react";

const useFetchPokemonData = () => {
  const [pokemons, setPokemons] = useState([] as Pokemon[]);
  const [error, setError] = useState(null as Error | any | null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(POKEAPI_URL);
        const data = await response.json() as {results: Pokemon[]};

        const pokemons = await Promise.all(
            data.results.map(async (poke) => {
            const res = await fetch(poke.url);
            const pokemonData = await res.json() as PokemonData;
            const urlInfo = poke.url.split("/");
            const index = urlInfo[6].padStart(3, '0');
            return { ...poke, id: index, data: pokemonData };
          })
        );

        setPokemons(pokemons);
        setLoading(false);

      } catch (error: Error | any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, []);

  return {pokemons, error, loading};
};


export default useFetchPokemonData;
