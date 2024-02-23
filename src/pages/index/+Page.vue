<template>
  <h1 class="title">
    Game Highlights
  </h1>
  <GameQuickDetailsBox
    title="Spooky Typing"
    video-src="/videos/spooky-typing-low.mp4"
    :bullets="[
      'Typing Game',
      'Spooky Theme',
      'Released on Steam',
    ]"
  />

  <GameQuickDetailsBox
    title="Tyfortress"
    video-src="/videos/tyfortress-low.mp4"
    :bullets="[
      'Tower Defense',
      'Stylized Neon',
      'Typing Text',
      'Released on Steam',
    ]"
  />

  <GameQuickDetailsBox
    title="Smashing Spirits"
    video-src="/videos/smashing-spirits-low.mp4"
    :bullets="[
      'Platformer 2D',
      'Combat and Puzzles',
      'Combos System',
      'Released on Steam',
    ]"
  />
  <!--
  <AutoplayVideo src="/videos/spooky-typing-low.mp4" />
  <AutoplayVideo src="/videos/tyfortress-low.mp4" />
  <AutoplayVideo src="/videos/smashing-spirits-low.mp4" />
  -->
</template>

<script setup>
import GameQuickDetailsBox from '../../components/GameQuickDetailsBox.vue';
</script>
