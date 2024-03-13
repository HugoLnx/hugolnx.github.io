<template>
  <a
    :href="href"
    class="game-link icon-text"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span class="icon">
      <i class="inner-icon fa-xl" :class="iconClasses" />
    </span>
    <span class="icon-raw-text">{{ title }}</span>
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

  .icon, .inner-icon, .icon-raw-text {
    line-height: 1.5rem;
    vertical-align: middle;
  }
}
</style>
