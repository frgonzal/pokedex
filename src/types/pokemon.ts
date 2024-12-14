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
  data?: PokemonData;
}

interface APIResponse {
  results: Pokemon[];
}

export type { Pokemon, PokemonData, APIResponse };
