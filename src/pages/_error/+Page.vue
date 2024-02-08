<template>
  <div class="center">
    <p>{{ abortReason }}</p>
  </div>
</template>

<script setup>
/* eslint-disable-next-line import/no-unresolved */
import { usePageContext } from ':usePageContext';

const pageContext = usePageContext();
const { is404 } = pageContext;
let { abortReason } = pageContext;
if (!abortReason) {
    abortReason = is404 ? 'Page not found.' : 'Something went wrong.';
}
</script>

<style>
.center {
  height: calc(100vh - 100px);
  display: flex;
  font-size: 1.3em;
  justify-content: center;
  align-items: center;
}
</style>
