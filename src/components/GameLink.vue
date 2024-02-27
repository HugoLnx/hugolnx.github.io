<template>
  <a
    :href="href"
    class="game-link icon-text"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span class="icon">
      <i class="fa-xl" :class="iconClasses" />
    </span>
    <span>{{ title }}</span>
  </a>
</template>

<script setup>
defineProps({
    title: { type: String, required: true },
    href: { type: String, required: true },
    iconClasses: { type: String, required: true },
});

</script>

<style lang="scss">
.game-link {
  .icon {
    min-width: 2rem;
  }
}
</style>
