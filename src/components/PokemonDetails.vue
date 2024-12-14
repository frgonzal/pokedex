<template>
  <div>
    <h1> Detalles Pokémon </h1>

    <div className="pokemon-container">
      <div className="nombre-pokemon"> {{ pokemon.name }} </div>
      <img :src="pokemon.data?.sprites.front_default" alt="pokemon"/>
      <p> Tipos: {{ pokemon.data?.types.map(type => type.type.name).join(', ') }} </p>
      <p> Habilidades: {{ pokemon.data?.abilities.map(ability => ability.ability.name).join(', ') }} </p>
      <p> Peso: {{ pokemon.data?.weight }} </p>
      <p> Altura: {{ pokemon.data?.height }} </p>
    </div>

    <button @click="showList">Regresar</button>
  </div>
</template>

<script lang="ts">
  import { PropType } from 'vue';
  import { Pokemon } from '../types/pokemon';

  export default {
    name: 'PokemonList',
    props: {
      pokemon: {
        type: {} as PropType<Pokemon>,
        required: true,
      },
      showList: {
        type: Function as PropType<() => void>,
        required: true,
      },
    },
  };
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
    border: solid 1px var(--color-white);
    border-radius: 1em;
    background-color: var(--color-secondary);
    padding: 1.4em;
  }

</style>


