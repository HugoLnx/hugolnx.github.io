<template>
  <div class="box game-quick-details">
    <div class="box-content">
      <h2 class="title title-simple is-4">
        {{ title }}
      </h2>
      <div class="box-columns">
        <div class="box-column">
          <AutoplayVideo
            class="game-video"
            :src="videoSrc"
            :width="videoWidth"
            :height="videoHeight"
          />
        </div>
        <div class="box-column bullets-column">
          <BulletList icon-classes="fa-regular fa-circle-check has-text-success">
            <BulletListItem v-for="bullet in bullets" :key="bullet">
              {{ bullet }}
            </BulletListItem>
          </BulletList>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AutoplayVideo from './AutoplayVideo.vue';
import BulletList from './BulletList.vue';
import BulletListItem from './BulletListItem.vue';

defineProps({
    title: { type: String, required: true },
    videoSrc: { type: String, required: true },
    bullets: { type: Array, required: true },
});

const videoWidth = 320;
const videoHeight = 180;
</script>

<style lang="scss">
  @import '../css/bulma-custom.scss';

  .game-quick-details {
    .box-content {
      padding: 0.5rem 1rem;
    }

    &.box {
      display: inline-block;
    }

    .box-columns {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      .box-column {
        flex-basis: fit-content;
      }

      .bullets-column {
        margin-left: 1rem;
      }

      .bullet-list {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        height: 120px;
      }

      .bullet-list, .bullet-list-item {
        &, span {
          font-size: $size-5;
        }
      }
    }

    .game-video {
      border-radius: 0.25rem;
    }
  }
</style>
