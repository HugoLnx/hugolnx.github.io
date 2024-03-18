<template>
  <div
    class="toggable-content"
    :class="{
      'is-content-on': isContentOn,
    }"
    @click.stop.prevent="toggle"
  >
    <div class="inner-content">
      <slot />
    </div>
    <a
      href="#"
      class="toggle-button"
      @click.prevent
    >
      <span class="icon">
        <i class="toggle-icon fa-solid fa-chevron-down" />
      </span>
      <span class="toggle-label-wrapper">
        <span class="toggle-off-label">{{ showLabel }}</span>
        <span class="toggle-on-label">{{ hideLabel }}</span>
      </span>
    </a>
  </div>
</template>

<script setup>
import { ref, defineExpose } from 'vue';

const isContentOn = ref(false);

defineProps({
    showLabel: { type: String, required: false, default: 'Show Details' },
    hideLabel: { type: String, required: false, default: 'Hide Details' },
});

const emit = defineEmits(['toggled']);

function toggle({ forceValue } = {}) {
    if (forceValue === undefined) {
        isContentOn.value = !isContentOn.value;
    } else {
        isContentOn.value = forceValue;
    }

    emit('toggled', isContentOn.value);
}

defineExpose({
    toggle,
    isContentOn: () => isContentOn.value,
});
</script>

<style lang="scss">
@use 'sass:color';
@import '../css/bulma-custom.scss';

$anim-duration: 500ms;
$anim-ease: ease-out;

.toggable-content {
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  // Inner Content Styling
  .inner-content {
    max-height: 0;
    // transform: translateY(-100%); // scaleY(0);
    // transform-origin: top center;
    opacity: 0;
    transition: all $anim-duration $anim-ease;
  }

  &.is-content-on {
    .inner-content {
      max-height: 500px;
      // transform: translateY(0);// scaleY(1);
      // transform-origin: top center;
      opacity: 1;
      padding: 1.5rem 0 1rem 0;
    }
  }

  // Toggle Button Styling
  .toggle-button {
    transition: margin-top $anim-duration $anim-ease;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    border-radius: $radius-rounded;
    padding: 0.33rem 1rem;
    margin: 0.5rem 0;
    font-size: $size-7;

    &, &:active, &:focus, &:visited {
      background-color: rgba(0, 0, 0, 0);
      color: $link;
      border: solid 1px $link;
    }
  }

  // Toggle Icon Styling
  .toggle-button {
    .toggle-icon {
      transition: transform $anim-duration $anim-ease;
    }
  }

  &.is-content-on {
    .toggle-button {
      .toggle-icon {
        transform: rotate(180deg);
      }
    }
  }

  // Toggle Text Styling
  .toggle-label-wrapper {
    .toggle-on-label {
      display: none;
      opacity: 0;
    }

    .toggle-off-label {
      display: inline-block;
      opacity: 1;
    }

    .toggle-on-label, .toggle-off-label {
      transition: opacity $anim-duration $anim-ease;
    }
  }

  &.is-content-on {
    .toggle-label-wrapper {
      position: relative;

      .toggle-on-label {
        display: inline-block;
        opacity: 1;
      }

      .toggle-off-label {
        display: none;
        opacity: 0;
      }
    }
  }
}
</style>
