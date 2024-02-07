<template>
  <h1>Welcome</h1>
  This page is:
  <ul>
    <li>Rendered to HTML.</li>
    <li>Interactive. <Counter /></li>
  </ul>
</template>

<script setup>
import Counter from './Counter.vue';
</script>

<style lang="scss">
$back-color: #fcc;
$font-color: #88c;

body {
  background-color: $back-color;

  h1 {
    color: $font-color;
  }
}
</style>
