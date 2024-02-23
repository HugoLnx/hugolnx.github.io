<template>
  <video
    :width="width"
    :height="height"
    autoplay
    muted
    loop
  >
    <source
      :src="src"
      type="video/mp4"
    >
  </video>
</template>

<script setup>
defineProps({
    src: { type: String, required: true },
    width: { type: Number, required: false, default: 360 },
    height: { type: Number, required: false, default: 240 },
});
</script>
