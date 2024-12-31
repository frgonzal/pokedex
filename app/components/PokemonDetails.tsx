import BorderDecorator from './BorderDecorator';
import ImageDecorator from './ImageDecorator';
import Image from 'next/image';
import { Pokemon } from '../types';

interface PokemonDetailsProps {
  pokemon: Pokemon;
  goBack: () => void;
}


function PokemonDetails({ pokemon, goBack }: PokemonDetailsProps) {
  return (
    <div className="flex flex-col items-center justify-center pt-10 gap-20">
      <BorderDecorator>
        <div className="flex flex-col items-center justify-center py-3">
          <p className="font-ps2p">{pokemon.name}</p>
        </div>
      </BorderDecorator>

      <ImageDecorator 
        src={pokemon.data ? pokemon.data.sprites.front_default : ''} 
        alt={pokemon.name} 
        size={220}
        backgroundImg='/Pokeball.svg'
        backgroundSize={600}
        />

      <BorderDecorator>
        <div className="flex flex-col items-start justify-center pl-2 font-ps2p max-w-[500px] gap-6 py-4">
          <p>Height: {pokemon.data?.height}</p>
          <p>Weight: {pokemon.data?.weight}</p>
          <p>Abilities: {pokemon.data?.abilities.map((ability) => ability.ability.name).join(', ')}</p>
          <p>Types: {pokemon.data?.types.map((type) => type.type.name).join(', ')}</p>
        </div>
      </BorderDecorator>

      <button onClick={goBack}>
        <Image
          src="backspace-fill.svg" 
          alt="Go back" 
          width={40}
          height={40}
        />
      </button>
    </div>
  );
}

export default PokemonDetails;