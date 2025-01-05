import ListDecorator from "@/components/Decorators/ListDecorator"
import { Pokemon } from "@/types/pokemons";
import PokemonRow from "./PokemonRow";

interface ListProps {
  pokemons: Pokemon[];
  onPokemonClick: (pokemon: Pokemon) => void;
};

function PokemonList({ pokemons, onPokemonClick}: ListProps) {

  if (pokemons.length === 0) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-40px)]">
        <p className="font-ps2p">No Pokemon found</p>
      </div>
    )
  }


  return (
    <ListDecorator>
      <div className="flex flex-col items-center justify-center">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="w-full">
            <PokemonRow pokemon={pokemon} onClick={onPokemonClick}/>
          </div>
        ))}
      </div>
    </ListDecorator>
  );
}

export default PokemonList;