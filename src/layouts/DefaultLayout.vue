<template>
  <div>
    <!-- <Header /> -->
    <slot />
    <!-- <Footer /> -->
  </div>
</template>

<script lang="ts">
// import Header from '../components/Header.vue';
// import Footer from '../components/Footer.vue';

export default {
  name: 'DefaultLayout',
  components: {
    // Header,
    // Footer,
  },
};
</script>