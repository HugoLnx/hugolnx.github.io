<template>
  <span class="tag tag-item" :class="defaultClasses">
    <slot />
  </span>
</template>

<script setup>
import { inject } from 'vue';

const defaultClasses = inject('defaultClasses');
</script>
