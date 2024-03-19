<template>
  <ToggableContent
    ref="toggableContent"
    class="game-toggable-content"
    :class="{
      'is-open-to-bottom': openDirection === 'bottom',
      'is-open-to-right': openDirection === 'right',
      'is-open-to-left': openDirection === 'left',
    }"
  >
    <slot />
  </ToggableContent>
</template>

<script setup>
import {
    ref,
    toRef,
    watch,
    onMounted,
    onUnmounted,
} from 'vue';
import ToggableContent from './ToggableContent.vue';
import { preventSequentialCalls } from '../js/utils';

const toggableContent = ref(null);
const openDirection = ref('bottom');

const props = defineProps({
    gameBox: { type: Object, required: false, default: null },
});
const gameBox = toRef(props, 'gameBox');

const refreshOpenDirection = preventSequentialCalls(() => {
    const el = gameBox.value;
    if (!el) return;
    const screenWidth = document.body.clientWidth;
    const rect = el.getBoundingClientRect();
    const spaceAtLeft = rect.left;
    const spaceAtRight = screenWidth - rect.right;
    const width = rect.right - rect.left;

    if (spaceAtRight >= spaceAtLeft && spaceAtRight >= width) {
        openDirection.value = 'right';
    } else if (spaceAtLeft > spaceAtRight && spaceAtLeft >= width) {
        openDirection.value = 'left';
    } else {
        openDirection.value = 'bottom';
    }
});

function toggle(...args) {
    refreshOpenDirection();
    toggableContent.value.toggle(...args);
}

onMounted(() => {
    window.addEventListener('resize', refreshOpenDirection);
    window.addEventListener('orientationchange', refreshOpenDirection);
    window.addEventListener('load', refreshOpenDirection);
    window.addEventListener('DOMContentLoaded', refreshOpenDirection);
    refreshOpenDirection();
});

onUnmounted(() => {
    window.removeEventListener('resize', refreshOpenDirection);
    window.removeEventListener('orientationchange', refreshOpenDirection);
    window.removeEventListener('load', refreshOpenDirection);
    window.removeEventListener('DOMContentLoaded', refreshOpenDirection);
});

watch(gameBox, refreshOpenDirection);

defineExpose({
    toggle,
    isContentOn: () => toggableContent.value?.isContentOn(),
});
</script>

<style lang="scss">
  @import '../css/bulma-custom.scss';

  // Game Gallery View Styling
  @include only-game-gallery {
    .game-toggable-content.toggable-content {
      .toggle-button {
        display: none;
      }
    }

    .is-horizontal-video .game-toggable-content.toggable-content {
      width: 100%;
    }

    .is-vertical-video .game-toggable-content.toggable-content {
      width: 175%;
    }

    .game-toggable-content.toggable-content {
      position: absolute;
      z-index: -1;

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
        left: 100%;
        transform: translate(-50%, -50%);
        margin-left: 0.5rem;

        &.is-content-on {
          transform: translate(0, -50%);
          opacity: 1;
        }
      }

      &.is-open-to-left {
        top: 50%;
        right: 100%;
        transform: translate(50%, -50%);
        margin-right: 0.5rem;

        &.is-content-on {
          transform: translate(0, -50%);
          opacity: 1;
        }
      }

      &.is-open-to-bottom {
        bottom: 0;
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
