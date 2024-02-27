<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="icon-text social-icon-link"
  >
    <span class="icon no-margin-icon">
      <span :class="iconClasses" class="fa-2xl" />
    </span>
    <span class="icon-raw-text">{{ text }}</span>
  </a>
</template>

<script setup>
defineProps({
    href: { type: String, required: true },
    iconClasses: { type: String, required: true },
    text: { type: String, required: true },
});
</script>

<style lang="scss">
@import '../css/bulma-custom.scss';

a.social-icon-link {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 2rem;

  .icon-raw-text {
    font-size: $size-7-l2;
  }

  &:not(:hover) .icon-raw-text {
    color: $grey-light;
  }

  .icon {
    width: 100%;
    text-align: center;

    &.no-margin-icon {
      margin: 0;
    }
  }
}
</style>
