<template>
  <ToggableContent
    ref="toggableContent"
    class="game-toggable-content is-open-to-bottom"
  >
    <slot />
  </ToggableContent>
</template>

<script setup>
import { ref, defineExpose } from 'vue';
import ToggableContent from './ToggableContent.vue';

const toggableContent = ref(null);

function toggle(...args) {
    toggableContent.value.toggle(...args);
}

defineExpose({
    toggle,
    isContentOn: () => toggableContent.value.isContentOn(),
});
</script>

<style lang="scss">
  @import '../css/bulma-custom.scss';

  // Game Gallery View Styling
  @include from($game-gallery-breakpoint) {
    .game-toggable-content.toggable-content {
      .toggle-button {
        display: none;
      }
    }

    .game-toggable-content.toggable-content {
      position: absolute;
      width: 100%;

      transition: transform 200ms ease-out;
      transition-property: transform, opacity;
      opacity: 0;
      background-color: $game-box-selected-dark-color;
      border-radius: $box-radius;
      padding: 1rem;

      .inner-content {
        max-height: unset;
        padding: 0;
        width: 100%;
      }

      &.is-open-to-right {
        top: 50%;
        left: 50%;
        transform: translate(0, -50%);
        margin-left: 0.5rem;

        &.is-content-on {
          transform: translate(50%, -50%);
          opacity: 1;
        }
      }

      &.is-open-to-left {
        top: 50%;
        right: 50%;
        transform: translate(0, -50%);
        margin-right: 0.5rem;

        &.is-content-on {
          transform: translate(-50%, -50%);
          opacity: 1;
        }
      }

      &.is-open-to-bottom {
        bottom: 0;
        top: unset;
        left: 50%;
        transform: translate(-50%, 50%);
        margin-bottom: -0.5em;

        &.is-content-on {
          transform: translate(-50%, 100%);
          opacity: 1;
        }
      }
    }
  }
</style>
