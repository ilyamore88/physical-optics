<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from '@/components/Navigation.vue';

@Component({
  components: {
    Navigation
  }
})
/**
 * Class represents application
 */
export default class App extends Vue {
}
</script>

<style>
@import './styles/custom-properties.css';

#app {
  @apply --font-sans-serif-main;
  display: flex;
  height: 100vh;
}

body {
  margin: 0;
}
</style>
