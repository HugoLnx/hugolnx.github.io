<template>
  <section class="games-page-section page-section">
    <h2 class="title page-section-title">
      Games
    </h2>

    <div class="game-boxes">
      <NewGameBox
        v-for="game in games"
        :key="game.shortTitle"
        :game="game"
      />
    </div>
  </section>
</template>

<script setup>
import NewGameBox from '../../components/NewGameBox.vue';
import data from './gamesDataProvider';

const { games } = data;
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
