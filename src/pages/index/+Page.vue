<template>
  <h1 class="title">
    Game Highlights
  </h1>

  <GameBox
    v-for="game in games"
    :key="game.shortTitle"
    :title="game.shortTitle + ' (Low)'"
    :video-src="game.links.previewLow"
    :highlights="game.bullets.technical"
    :integrations="game.bullets.integrations"
    :engine="game.engine"
    :platforms="game.platforms"
    :links="game.links"
    :is-personal="game.isPersonal"
    :is-mobile="game.isMobile"
    :is-freelance="game.isFreelance"
  />
</template>

<script setup>
import GameBox from '../../components/GameBox.vue';
import data from './overviewDataProvider';

const { games } = data;
</script>
