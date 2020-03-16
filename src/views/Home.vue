<template>
    <div class="home">

    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from '../components/Navigation.vue';

@Component({
  components: {
    Navigation
  }
})
/**
 * Class represents home page of site
 */
export default class Home extends Vue {
}
</script>

<style>
  .home {

  }
</style>
