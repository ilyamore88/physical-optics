<template>
  <div class="week-content">
    <h1>
      Промежуточная аттестация
    </h1>
    <small>Судя по всему, задачи на этой неделе у всех совпадают.</small>
    <img src="../../assets/week-5.jpg">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
/**
 * Class represents component for fifth week
 */
export default class Week5 extends Vue {}
</script>

<style src="@/styles/week-content.css"></style>
