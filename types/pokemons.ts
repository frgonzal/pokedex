interface PokemonType {
  type: {
    name: string;
  };
}

interface PokemonAbility {
  ability: {
    name: string;
  };
}

interface PokemonData {
  sprites: {
    front_default: string;
  };
  types: PokemonType[];
  abilities: PokemonAbility[];
  weight: number;
  height: number;
}

interface Pokemon {
  name: string;
  url: string;
  id: string;
  data: PokemonData;
}

export type { Pokemon, PokemonData, PokemonType, PokemonAbility };
