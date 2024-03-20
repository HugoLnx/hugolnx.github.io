<template>
  <li class="bullet-list-item">
    <span class="icon-text">
      <span class="icon">
        <span :class="iconClasses" />
      </span>
      <span class="icon-raw-text">
        <slot />
      </span>
    </span>
  </li>
</template>

<script setup>
import { inject } from 'vue';

const iconClasses = inject('iconClasses');
const hoverColor = inject('hoverColor');
</script>

<style lang="scss">
@import '../css/bulma-custom.scss';
.bullet-list-item {
  display: block;
  margin-bottom: 0.25rem;

  .icon-text {
    display: flex;
    flex-flow: row nowrap;
  }

  .icon-raw-text {
    margin-left: 0.1rem;
    transition: color 200ms ease-out;
    transition-property: color, transform;
  }

  .icon, .icon span {
    color: v-bind(hoverColor);
  }

  @at-root .is-mouse &:hover {
    .icon, .icon span, .icon-raw-text {
      color: v-bind(hoverColor);
    }
    .icon-raw-text {
      transform: translateX(0.3rem);
    }
  }
}
</style>
