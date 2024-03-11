<template>
  <h1 class="title">
    Portfolio
  </h1>

  <div class="game-boxes">
    <GameBox
      v-for="game in games"
      :key="game.shortTitle"
      :title="game.shortTitle"
      :video-src="game.links.previewLow"
      :highlights="game.bullets.technical"
      :integrations="game.bullets.integrations"
      :engine="game.engine"
      :platforms="game.platforms"
      :links="game.links"
      :is-personal="game.isPersonal"
      :is-mobile="game.isMobile"
      :is-freelance="game.isFreelance"
      :is-init-video-only="true"
      :min-scale="0.85"
      :lerp-scale-min-screen="1250"
      :lerp-scale-max-screen="1400"
    />
  </div>
</template>

<script setup>
import GameBox from '../../components/GameBox.vue';
import data from './portfolioDataProvider';

const { games } = data;
</script>

<style lang="scss">
  .game-boxes {
    display: flex;
    flex-flow: row wrap;
    gap: 0.25rem;
    align-items: center;
    justify-content: space-around;
  }
</style>
