<template>
  <h1 class="title">
    Game Highlights
  </h1>

  <GameQuickDetailsBox
    v-for="game in games"
    :key="game.shortTitle"
    :title="game.shortTitle"
    :video-src="game.links.previewLow"
    :highlights="game.bullets.technical"
    :integrations="game.bullets.integrations"
    :engine="game.engine"
    :platforms="game.platforms"
    :links="game.links"
  />
</template>

<script setup>
import GameQuickDetailsBox from '../../components/GameQuickDetailsBox.vue';
import data from './overviewDataProvider';

const { games } = data;
</script>
