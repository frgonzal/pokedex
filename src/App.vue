<template>
  <PokemonDetails v-if="activePokemon" :pokemon="activePokemon" :showList="showList"/>
  <PokemonList v-else :results="results" :showPokemon="showPokemon"/>
</template>


<script lang="ts">
  import { ref } from 'vue';
  import { Pokemon, PokemonData, APIResponse } from './types/pokemon.ts';
  import PokemonList from './components/PokemonList.vue';
  import PokemonDetails from './components/PokemonDetails.vue';
  import { TOTAL_POKEMONS } from './config.ts';

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
      showPokemon(pokemon: Pokemon) {
        this.activePokemon = pokemon;
      },

      showList() {
        this.activePokemon = null;
      },

      /**
       * Fetch the Pokémon image from the API.
       * @param name The Pokémon name.
       * @returns The Pokémon image URL.
       */
      async GetPokemonImg(name: string) {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
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
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONS}&offset=0`);
          const data = await response.json() as APIResponse;
          this.results = data.results;
          this.results.forEach(async (pokemon) => {
            const data = await this.GetPokemonImg(pokemon.name);
            pokemon.data = data;
          });
        } catch (error) {
          console.error('Error fetching Pokémon data:', error);
        }
      },
    },
  };
</script>