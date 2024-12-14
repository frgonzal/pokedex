<template>
  <div>
    <h1>Lista Pokémon</h1>
    <input type="text" v-model="search" @keyup="filterPokemons" placeholder="Buscar Pokémon" />

    <ul>
      <li v-for="pokemon in pokemonsToShow" @click="() => showPokemon(pokemon)" :key="pokemon.name">
        <span> {{ pokemon.name }} </span>
        <img :src="pokemon.data?.sprites.front_default" alt="pokemon" v-if="pokemon.data"/>
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
  import { ref, watch } from 'vue';
  import { Pokemon } from '../types/pokemon';
  import { TOTAL_POKEMONS, POKEMONS_PER_PAGE } from '../config';
  import { PropType } from 'vue';

  export default {
    name: 'PokemonList',
    props: {
      results: {
        type: Array<Pokemon>,
        required: true,
      },
      showPokemon: {
        type: Function as PropType<(pokemon: Pokemon) => void>,
        required: true,
      },
    },

    setup(props) {
      const pokemons = ref(props.results);
      const first = ref(0);
      const search = ref('');
    
      watch(() => props.results, () => {
        pokemons.value = props.results;
      });

      return {
        pokemons,
        first,
        search,
      };
    },

    computed:{
      /**
       * Get the last index of the pokemons to show.
       */
      last() {
        return this.first + POKEMONS_PER_PAGE;
      },

      /**
       * Get the pokemons to show based on the first and last indexes.
       * Used to show only 30 pokemons at a time.
       */
      pokemonsToShow() {
        return this.pokemons.slice(this.first, this.first + POKEMONS_PER_PAGE);
      },

      /**
       * Get the max number of pokemons that can be shown.
       * Used to show the next button only when there are more pokemons to show.
       */
      maxPokemon() {
        return this.pokemons.length;
      }
    },

    methods: {
      /**
       * Set the first and last indexes to show the next page of pokemons, 
       * so the user can see the next 30 pokemons.
       */
      setToNext() {
        this.first = Math.min(this.first + POKEMONS_PER_PAGE, TOTAL_POKEMONS - POKEMONS_PER_PAGE);
      },

      /**
       * Set the first and last indexes to show the previous page of pokemons,
       * so the user can see the previous 30 pokemons.
       */
      setToPrevious() {
        this.first = Math.max(this.first - POKEMONS_PER_PAGE, 0);
      },

      /**
       * Filter the pokemons based on the search input.
       */
      filterPokemons() {
        this.first = 0;
        const cleanSearch = this.search.trim().toLowerCase();
        this.pokemons = this.results.filter((pokemon) => {
          return this.search === '' || pokemon.name.toLowerCase().includes(cleanSearch);
        });
      },
    },
  };
</script>


<style scoped>
  ul {
    list-style-type: none;
    padding: 1em;
  }

  li {
    padding: 0.5em;
    border-bottom: 1px solid var(--color-white);
    border-top: 1px solid var(--color-white);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-white);
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }

  li:hover {
    background-color: var(--color-secondary);
    /* border: 1px solid var(--color-white); */
    /* border-radius: 1em; */
  }

  li span {
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