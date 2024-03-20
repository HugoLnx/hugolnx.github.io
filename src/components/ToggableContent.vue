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
    <ToggableContentButton
      :show-label="showLabel"
      :hide-label="hideLabel"
      :class="{
        'is-content-on': isContentOn,
      }"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ToggableContentButton from './ToggableContentButton.vue';

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
}
</style>
