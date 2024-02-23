<template>
  <div class="tags">
    <slot />
  </div>
</template>

<script setup>
import { provide } from 'vue';

const { defaultClasses } = defineProps({
    defaultClasses: { type: String, required: false, default: '' },
});
provide('defaultClasses', defaultClasses);
</script>
