<template>
  <PageHead
    :data="data"
  />
  <meta
    name="robots"
    content="noindex, nofollow"
  >
</template>

<script setup>
import PageHead from '../../components/PageHead.vue';
import data from './headDataProvider';
</script>
