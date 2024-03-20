<template>
  <ul class="bullet-list">
    <slot />
  </ul>
</template>

<script setup>
import { provide } from 'vue';
import bulmaConsts from '../js/bulma-constants';

const { colors: bulmaColors } = bulmaConsts;

const { iconClasses, hoverColor, iconColor } = defineProps({
    iconClasses: { type: String, required: false, default: 'fa-solid fa-angle-right' },
    hoverColor: { type: String, required: false, default: undefined },
    iconColor: { type: String, required: false, default: undefined },
});

provide('iconClasses', iconClasses);
provide('hoverColor', hoverColor || bulmaColors.link);
provide('iconColor', iconColor || hoverColor || bulmaColors.link);
</script>

<style lang="scss">
.bullet-list {
  display: flex;
  flex-flow: column nowrap;
  align-items: start;
  justify-content: center;
}
</style>
