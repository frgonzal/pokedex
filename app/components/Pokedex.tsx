'use client';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import PokemonList from './PokemonList';
import PokemonDetails from './PokemonDetails';
import Pagination from './Pagination';
import SearchInput from './SearchInput';
import { Pokemon, PokemonData } from '@/app/types';

interface PokedexProps {
  reload: number;
}

function Pokedex({ reload }: PokedexProps) {
  const [pokemonData, setPokemonData] = useState([] as Pokemon[]);
  const [activePokemon, setActivePokemon] = useState(null as Pokemon | null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const pokemonsPerPage = 10;
  const filteredPokemonData = pokemonData.filter((poke) => poke.name.includes(search));
  const maxPage = Math.ceil(filteredPokemonData.length / pokemonsPerPage);
  const pokemons = filteredPokemonData.slice((page - 1) * pokemonsPerPage, page * pokemonsPerPage);

  useEffect(() => {
    setPage(1);
    setSearch("");
    setActivePokemon(null);
  }, [reload]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
        const data = await response.json() as {results: Pokemon[]};

        // Fetch details for all pokemons concurrently
        const detailedPokemons = await Promise.all(
          data.results.map(async (poke) => {
            const res = await fetch(poke.url);
            const pokemonDetails = await res.json() as PokemonData;
            const urlInfo = poke.url.split("/");
            const index = urlInfo[6].padStart(3, '0');
            return { ...poke, id: index, data: pokemonDetails };
          })
        );

        setPokemonData(detailedPokemons);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch Pokémon data:", error);
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-40px)]">
        <p>Loading...</p>
      </div>
    );
  }

  const onPrevious = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const onNext = () => {
    setPage((prev) => Math.min(prev + 1, maxPage));
  };

  const onSearch = (newValue: string) => {
    setSearch(newValue);
    setPage(1);
  };

  const onPokemonClick = (pokemon: Pokemon) => {
    setActivePokemon(pokemon);
  };

  const handleBackButton = () => {
    setActivePokemon(null);
  };

  return (
    <div className="flex flex-row items-center justify-center h-full gap-1 p-6">
      <div className="">
      {
        activePokemon ? (
          <PokemonDetails pokemon={activePokemon} goBack={handleBackButton}/>
        ) : (
          <>
            <SearchInput value={search} onChange={onSearch} />
            <PokemonList pokemons={pokemons} onPokemonClick={onPokemonClick}/>
            <Pagination actualPage={page} maxPage={maxPage} onPrevious={onPrevious} onNext={onNext} />
          </>
        )
      }
      </div>
    </div>
  )
}

export default Pokedex;