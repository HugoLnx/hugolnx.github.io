<template>
  <ul class="bullet-list">
    <slot />
  </ul>
</template>

<script setup>
import { provide } from 'vue';
import bulmaConsts from '../js/bulma-constants';

const { colors: bulmaColors } = bulmaConsts;

const { iconClasses, hoverColor } = defineProps({
    iconClasses: { type: String, required: false, default: 'fa-solid fa-angle-right' },
    hoverColor: { type: String, required: false, default: undefined },
});

provide('iconClasses', iconClasses);
provide('hoverColor', hoverColor || bulmaColors.green);
</script>
