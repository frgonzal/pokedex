import ImageDecorator from "./ImageDecorator";
import { Pokemon } from "../types";

interface PokemonRowProps {
  pokemon: Pokemon;
  onClick: (pokemon: Pokemon) => void;
}

function PokemonRow({ pokemon, onClick }: PokemonRowProps) {
  return (
    <div 
      className="flex items-center gap-16 w-full justify-start px-2 font-ps2p text-gray-800 text-sm border-4 border-transparent rounded-lg hover:border-red-500 hover:shadow-[inset_0_0_0_2px_#ffffff,0_0_0_2px_#ffffff] transition-all duration-300 cursor-pointer"
      onClick={() => onClick(pokemon)}
    >
      <ImageDecorator
        src={pokemon.data ? pokemon.data.sprites.front_default : ''}
        alt={pokemon.name}
        size={55}
      />

      {pokemon.id} {pokemon.name}
    </div>
  );
}

export default PokemonRow;