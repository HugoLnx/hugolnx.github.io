<template>
  <section class="games-page-section page-section">
    <h1 class="title page-section-title">
      {{ title }}
    </h1>

    <div class="game-boxes">
      <GameBox
        v-for="game in games"
        :key="game.shortTitle"
        :game="game"
      />
    </div>
  </section>
</template>

<script setup>
import GameBox from '../../components/GameBox.vue';
import data from './gamesDataProvider';

const { games, title } = data;
</script>

<style lang="scss">
@import '../../css/bulma-custom.scss';
  .games-page-section {
    .game-boxes {
      display: flex;
      flex-flow: row wrap;
      gap: 0.75rem;
      align-items: center;
      justify-content: space-around;
    }

    .title.section-title {
      font-size: $size-2;
      border-bottom: 2px solid #ddd;
      margin-top: 3rem;
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      text-align: center;
    }
  }
</style>
