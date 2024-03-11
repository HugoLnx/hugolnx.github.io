<template>
  <div class="games-section">
    <h1 class="title">
      Games
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
        :min-scale="0.85"
        :lerp-scale-min-screen="1250"
        :lerp-scale-max-screen="1400"
      />
    </div>
  </div>
</template>

<script setup>
import GameBox from '../../../components/GameBox.vue';
import data from '../overviewDataProvider';

const { games } = data;
</script>

<style lang="scss">
  .game-boxes {
    display: flex;
    flex-flow: row wrap;
    gap: 0.75rem;
    align-items: start;
    justify-content: space-around;
  }
</style>
