import BorderDecorator from '@/components/Decorators/BorderDecorator';
import ImageDecorator from '@/components/Decorators/ImageDecorator';
import { Pokemon } from '@/types/pokemons';
import Image from 'next/image';

interface PokemonDetailsProps {
  pokemon: Pokemon;
  goBack: () => void;
}


function PokemonDetails({ pokemon, goBack }: PokemonDetailsProps) {
  return (
    <div className="flex flex-col items-center justify-center pt-10 gap-16">
      <BorderDecorator>
        <div className="flex flex-col items-center justify-center py-3 font-ps2p text-2xl">
          {pokemon.name}
        </div>
      </BorderDecorator>

      <ImageDecorator 
        src={pokemon.data ? pokemon.data.sprites.front_default : ''} 
        alt={pokemon.name} 
        size={220}
        backgroundImg='/Pokeball.svg'
        backgroundSize={500}
        />

      <BorderDecorator>
        <div className="grid grid-cols-2 pl-2 font-ps2p max-w-[500px] gap-4 py-4">
          <p>Height:</p> <p>{pokemon.data?.height}</p>
          <p>Weight:</p> <p>{pokemon.data?.weight}</p>
          <p>Abilities:</p> <p>{pokemon.data?.abilities.map((ability) => ability.ability.name).join(', ')}</p>
          <p>Types: </p> <p>{pokemon.data?.types.map((type) => type.type.name).join(', ')}</p>
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