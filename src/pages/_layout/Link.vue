<template>
  <a :class="{ active: isActive }">
    <slot />
  </a>
</template>

<script setup>
import { useAttrs, computed } from 'vue';
/* eslint-disable-next-line import/no-unresolved */
import { usePageContext } from ':usePageContext';

const pageContext = usePageContext();
const { href } = useAttrs();
const isActive = computed(() => {
    const { urlPathname } = pageContext;
    return href === '/' ? urlPathname === href : urlPathname.startsWith(href);
});
</script>

<style scoped>
a {
  padding: 2px 10px;
  margin-left: -10px;
}
a.active {
  background-color: #eee;
}
</style>
