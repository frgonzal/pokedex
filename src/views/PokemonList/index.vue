<template>
  <div>
    <h1>Lista Pokémon</h1>
    <input type="text" v-model="search" @keyup="filterPokemons" placeholder="Buscar Pokémon" />

    <ul>
      <li v-for="pokemon in pokemonsToShow" :key="pokemon.name">
        <router-link className="row" :to="{ name: 'PokemonDetail', params: { name: pokemon.name} }">
          <span> {{ pokemon.name }} </span>
          <img :src="pokemon.img" alt="pokemon" v-if="pokemon.img"/>
        </router-link>
      </li>
    </ul>

    <div v-if="pokemons.length === 0">
      No se encontraron coincidencias
    </div>

    <div className="pagination">
      <button className="prev" @click="setToPrevious" v-if="first > 0">Anterior</button>
      <button className="next" @click="setToNext" v-if="last < maxPokemon">Siguiente</button>
    </div>

  </div>
</template>


<script lang="ts">
  import { ref } from 'vue';

  interface PokemonData {
    name: string;
    url: string;
    img?: string;
  }

  interface APIResponse {
    results: Array<PokemonData>;
  }

  const TOTAL_POKEMONS = 150;
  const POKEMONS_PER_PAGE = 30;

  export default {
    name: 'PokemonList',

    setup() {
      const results = ref([] as Array<PokemonData>);
      const pokemons = ref([] as Array<PokemonData>);
      const first = ref(0);
      const last = ref(POKEMONS_PER_PAGE);
      const search = ref('');
      
      return {
        pokemons,
        results,
        first,
        last,
        search,
      };
    },

    computed:{

      /**
       * Get the pokemons to show based on the first and last indexes.
       * Used to show only 30 pokemons at a time.
       */
      pokemonsToShow() {
        return this.pokemons.slice(this.first, this.last);
      },

      /**
       * Get the max number of pokemons that can be shown.
       * Used to show the next button only when there are more pokemons to show.
       */
      maxPokemon() {
        return this.pokemons.length;
      }
    },

    created() {
      this.fetchPokemonListData();
    },

    methods: {

      /**
       * Set the first and last indexes to show the next page of pokemons, 
       * so the user can see the next 30 pokemons.
       */
      setToNext() {
        this.first = Math.min(this.first + POKEMONS_PER_PAGE, TOTAL_POKEMONS - POKEMONS_PER_PAGE);
        this.last = Math.min(this.last + POKEMONS_PER_PAGE, TOTAL_POKEMONS);
      },

      /**
       * Set the first and last indexes to show the previous page of pokemons,
       * so the user can see the previous 30 pokemons.
       */
      setToPrevious() {
        this.last = Math.max(this.last - POKEMONS_PER_PAGE, POKEMONS_PER_PAGE);
        this.first = Math.max(this.first - POKEMONS_PER_PAGE, 0);
      },

      /**
       * Fetch the Pokémon image from the API.
       * @param name The Pokémon name.
       * @returns The Pokémon image URL.
       */
      async GetPokemonImg(name: string) {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
          const data = await response.json();
          return data.sprites.front_default;
        } catch (error) {
          console.error('Error fetching Pokémon image:', error);
        }
      },

      /**
       * Filter the pokemons based on the search input.
       */
      filterPokemons() {
        this.first = 0;
        this.last = POKEMONS_PER_PAGE;
        const cleanSearch = this.search.trim().toLowerCase();
        this.pokemons = this.results.filter((pokemon) => {
          return this.search === '' || pokemon.name.toLowerCase().includes(cleanSearch);
        });
      },

      /**
       * Fetch the Pokémon list data from the API.
       * @param url The URL to fetch the Pokémon list data.
       */
      async fetchPokemonListData() {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONS}&offset=0`);
          const data: APIResponse = await response.json();
          this.results = data.results;
          this.results.forEach(async (pokemon) => {
            const img = await this.GetPokemonImg(pokemon.name);
            pokemon.img = img;
          });
          this.filterPokemons();
        } catch (error) {
          console.error('Error fetching Pokémon data:', error);
        }
      },
    },
  };
</script>


<style scoped>
  ul {
    list-style-type: none;
    padding: 1em;
  }

  .row {
    padding: 0.5em;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ccc;
    cursor: pointer;
  }

  .row span {
    font-size: 1.5em;
  }

  .pagination {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  input {
    width: 80%;
    min-width: 15em;
    padding: 0.5em;
    margin-bottom: 1em;
    border-radius: 1em;
  }


  .pagination .prev {
    margin-right: auto;
  }

  .pagination .next {
    margin-left: auto;
  }


  img {
    width: 3em;
    height: 3em;
  }

</style>
