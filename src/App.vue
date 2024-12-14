<template>
  <!-- <component :is="layout"> -->
    <router-view />
  <!-- </component> -->
</template>
<!-- 
<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import DefaultLayout from './layouts/DefaultLayout.vue';

  export default defineComponent({
    components: {
      DefaultLayout,
    },
    setup() {
      const route = useRoute();
      const layout = computed(() => {
        return route.meta.layout || 'DefaultLayout';
      });
      return { layout };
    },
  });
</script> -->