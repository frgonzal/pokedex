'use client';
import React from 'react';
import { useState } from 'react';
import PokemonList from './List/PokemonList';
import PokemonDetails from './Detail/PokemonDetails';
import Pagination from '@/components/Navigation/Pagination';
import SearchInput from '@/components/Navigation/SearchInput';
import { Pokemon } from '@/types/pokemons';
import { POKEMONS_PER_PAGE } from '@/constants';
import useFetchPokemonData from '@/lib/useFetchPokemonData';

function Pokedex() {
  const { pokemons: pokemonData, error, loading } = useFetchPokemonData();
  const [activePokemon, setActivePokemon] = useState(null as Pokemon | null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const filteredPokemonData = pokemonData.filter((pokemon) => pokemon.name.includes(search));
  const maxPage = Math.ceil(filteredPokemonData.length / POKEMONS_PER_PAGE);
  const pokemons = filteredPokemonData.slice((page - 1) * POKEMONS_PER_PAGE, page * POKEMONS_PER_PAGE);

  if (error) {
    return (
      <div className="flex items-center justify-center py-10 font-bold text-2xl font-ps2p">
        An error occurred. Please try again later.
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-10 font-bold text-2xl font-ps2p">
        Loading...
      </div>
    );
  };

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
    <div className="flex flex-row items-center justify-center h-full gap-1">
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