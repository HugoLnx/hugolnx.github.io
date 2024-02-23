<template>
  <ul class="bullet-list">
    <slot />
  </ul>
</template>

<script setup>
import { provide } from 'vue';

const { iconClasses } = defineProps({
    iconClasses: { type: String, required: false, default: 'fa-solid fa-angle-right' },
});

provide('iconClasses', iconClasses);
</script>
