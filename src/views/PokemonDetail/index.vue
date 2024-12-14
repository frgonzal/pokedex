<template>
  <div>
    <h1> Detalles Pokémon </h1>

    <div className="pokemon-container">
      <div className="nombre-pokemon"> {{ pokemonName }} </div>
      <img :src="pokemonData.sprites.front_default" alt="pokemon"/>
      <p> Tipos: {{ pokemonData.types.map(type => type.type.name).join(', ') }} </p>
      <p> Habilidades: {{ pokemonData.abilities.map(ability => ability.ability.name).join(', ') }} </p>
      <p> Peso: {{ pokemonData.weight }} </p>
      <p> Altura: {{ pokemonData.height }} </p>
    </div>

    <button @click="$router.back()">Regresar</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useRoute } from 'vue-router';
  import { ref } from 'vue';

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

  export default defineComponent({
    name: 'PokemonList',
    props: {
      pokemonName: {
        type: String,
        required: true,
      },
    },

    setup() {
      const route = useRoute();
      const pokemonName = route.params.name as string;
      const pokemonData = ref({} as PokemonData);
      // Get the name of the Pokémon from the route params
      return {
        pokemonName,
        pokemonData,
      };
    },

    created() {
      this.fetchPokemonData();
    },

    methods: {
      /**
       * Fetch the Pokémon data from the API.
       * If there is an error, redirect to the home page.
       */
      async fetchPokemonData() {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemonName}`); 
          const data: PokemonData = await response.json();
          this.pokemonData = data;
        } catch (error) {
          console.error('Error fetching Pokémon data:', error);
          window.location.href = '/';
        }
      },
    },
  });
</script>


<style scoped>
  img {
    width: 10em;
    height: 10em;
  }

  .nombre-pokemon {
    font-size: 2.4em;
    font-weight: bold;
  }

  p {
    font-size: 1.5em;
  }

  .pokemon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2em;
    border: solid 1px #ccc;
    border-radius: 1em;
    background-color: #111d19;
    padding: 1.4em;
  }

</style>

