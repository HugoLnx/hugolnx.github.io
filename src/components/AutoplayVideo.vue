<template>
  <div class="video-wrapper autoplay-video">
    <video
      ref="videoElement"
      :width="width"
      :height="height"
      muted
      loop
      preload="none"
      @loadeddata="playVideo"
    >
      <source
        :src="src"
        type="video/mp4"
      >
    </video>
    <div
      class="video-overlay"
      :class="{ 'is-hidden': isPlaying }"
    >
      <i class="fa-solid fa-video fa-beat-fade video-spinner" />
    </div>
    <img
      :loading="isPriority ? 'eager' : 'lazy'"
      :fetchpriority="isPriority ? 'high' : 'auto'"
      :src="poster"
      class="video-poster"
      :class="{ 'is-hidden': isPlaying }"
    >
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const { width, height } = defineProps({
    src: { type: String, required: true },
    width: { type: Number, required: false, default: 360 },
    height: { type: Number, required: false, default: 240 },
    poster: { type: String, required: true },
    isPriority: { type: Boolean, required: false, default: false },
});

const videoElement = ref(null);
const isPlaying = ref(false);
const isLoading = ref(false);

const widthPx = `${width}px`;
const heightPx = `${height}px`;

const playVideo = () => {
    videoElement.value.play();
    isPlaying.value = true;
};

onMounted(() => {
    const options = {
        root: null,
        rootMargin: '100px',
        threshold: 0,
    };
    new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting || isPlaying.value || isLoading.value) return;
        videoElement.value.load();
        isLoading.value = true;
    }, options).observe(videoElement.value);
});
</script>

<style lang="scss">
  @use 'sass:color';
  @import '../css/bulma-custom.scss';

  $base-z-index: 1;

  .video-wrapper {
    position: relative;
    z-index: $base-z-index;

    .video-poster {
      z-index: $base-z-index + 1;
    }

    .video-overlay {
      z-index: $base-z-index + 2;
    }
  }

  .video-wrapper {
    &, video, .video-overlay, .video-poster {
      width: v-bind(widthPx);
      height: v-bind(heightPx);
      min-width: v-bind(widthPx);
      min-height: v-bind(heightPx);
    }

    video, .video-overlay, .video-poster {
      border-radius: inherit;
    }

    .video-overlay {
      position: absolute;
      top: 0;
      left: 0;
      background-color: color.change($black, $alpha: 0.5);

      text-align: center;
      display:flex;
      align-items: center;
      justify-content: center;

      .video-spinner {
        display: inline-block;
        font-size: 4rem;
        color: color.change($white, $alpha: 0.2);
      }
    }

    .video-poster {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
</style>
