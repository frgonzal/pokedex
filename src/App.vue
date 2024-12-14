<template>
  <PokemonDetails v-if="activePokemon" :pokemon="activePokemon" :showList="showList"/>
  <PokemonList v-else :results="results" :showPokemon="showPokemon"/>
</template>


<script lang="ts">
  import { ref } from 'vue';
  import { Pokemon, PokemonData, APIResponse } from './types/pokemon.ts';
  import PokemonList from './components/PokemonList.vue';
  import PokemonDetails from './components/PokemonDetails.vue';
  import { TOTAL_POKEMONS, POKEMON_API_URL } from './config.ts';

  export default {
    name: 'Pokedex',
    components: {
      PokemonList,
      PokemonDetails,
    },

    setup() {
      const results = ref([] as Array<Pokemon>);
      const activePokemon = ref(null as Pokemon | null);

      return { 
        results,
        activePokemon,
      };
    },

    created() {
      this.fetchPokemonData();
    },

    methods: {
      /**
       * Show the Pokémon details.
       * @param pokemon The Pokémon to show the details.
       */
      showPokemon(pokemon: Pokemon) {
        this.activePokemon = pokemon;
      },

      /**
       * Show the Pokémon list.
       */
      showList() {
        this.activePokemon = null;
      },

      /**
       * Fetch the Pokémon data from the API.
       * @param name The Pokémon name to fetch the data.
       */
      async GetPokemonData(name: string) {
        try {
          const response = await fetch(`${POKEMON_API_URL}/${name}`);
          const data = await response.json() as PokemonData;
          return data;
        } catch (error) {
          console.error('Error fetching Pokémon image:', error);
        }
      },

      /**
       * Fetch the Pokémon list data from the API.
       * @param url The URL to fetch the Pokémon list data.
       */
      async fetchPokemonData() {
        try {
          const response = await fetch(`${POKEMON_API_URL}?limit=${TOTAL_POKEMONS}&offset=0`);
          const data = await response.json() as APIResponse;
          this.results = data.results;
          this.results.forEach(async (pokemon) => {
            const data = await this.GetPokemonData(pokemon.name);
            pokemon.data = data;
          });
        } catch (error) {
          console.error('Error fetching Pokémon data:', error);
        }
      },
    },
  };
</script>