<template>
  <div class="box game-quick-details">
    <div class="box-content">
      <div class="game-quick-details-middle">
        <div class="video-inner-header">
          <h2 class="game-title title title-simple">
            {{ title }}
          </h2>
          <p v-if="isPersonal" class="personal-label">
            Personal Prototype
          </p>
        </div>
        <AutoplayVideo
          class="game-video"
          :src="videoSrc"
          :width="videoWidth"
          :height="videoHeight"
        />
        <div class="game-links">
          <GameLink
            v-if="links.steam"
            title="Steam"
            :href="links.steam"
            icon-classes="fa-brands fa-steam-symbol"
          />
          <GameLink
            v-if="links.trailer"
            title="Trailer"
            :href="links.trailer"
            icon-classes="fa-solid fa-play"
          />
          <GameLink
            v-if="links.gameplay"
            title="Gameplay"
            :href="links.gameplay"
            icon-classes="fa-solid fa-gamepad"
          />
        </div>
      </div>
      <div class="game-quick-details-bottom">
        <div class="box-columns">
          <div class="box-column highlights-column">
            <div class="game-highlights">
              <h3 class="title title-simple is-5">
                Highlights
              </h3>
              <BulletList
                icon-classes="fa-solid fa-star"
                :hover-color="starColor"
              >
                <BulletListItem v-for="topic in highlights" :key="topic">
                  {{ topic }}
                </BulletListItem>
              </BulletList>
            </div>
          </div>
          <div class="box-column bullets-column">
            <div v-if="integrations" class="game-integrations">
              <h3 class="title title-simple is-5">
                Integrations
              </h3>
              <ul class="inline-list">
                <li
                  v-for="integration in integrations"
                  :key="integration"
                  class="list-item"
                >
                  {{ integration }}
                </li>
              </ul>
            </div>
            <div class="game-specs">
              <h3 class="title title-simple is-5">
                Specs
              </h3>
              <p>
                Platforms:
                <span
                  v-for="platform in platforms"
                  :key="platform"
                  class="list-item"
                >
                  {{ platform }}
                </span>
              </p>
              <p>
                Made with: {{ engine }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AutoplayVideo from './AutoplayVideo.vue';
import BulletList from './BulletList.vue';
import BulletListItem from './BulletListItem.vue';
import GameLink from './GameLink.vue';
import bulmaConstants from '../js/bulma-constants';

const { integrations } = defineProps({
    title: { type: String, required: true },
    videoSrc: { type: String, required: true },
    highlights: { type: Array, required: true },
    integrations: { type: Array, required: true },
    platforms: { type: Array, required: true },
    engine: { type: String, required: true },
    links: { type: Object, required: true },
    isPersonal: { type: Boolean, default: false },
});

const { colors: bulmaColors } = bulmaConstants;
const starColor = bulmaColors.yellow;

const videoWidth = 640;
const videoHeight = 360;

const videoWidthPx = `${videoWidth}px`;
// const gameHighlightsHeightPx = `${videoHeight + 15}px`;
</script>

<style lang="scss">
  @use 'sass:color';
  @import '../css/bulma-custom.scss';

  @mixin video-inner-tag-like-colors($back, $back-hover, $border, $border-hover) {
    border: $button-border-width solid;
    background-color: color.change($back, $alpha: 0.6);
    border-color: color.change($border, $alpha: 0.05);

    &:hover {
      background-color: color.change($back-hover, $alpha: 0.95);
      border-color: color.change($border-hover, $alpha: 1);
    }
  }

  .box.game-quick-details {
    padding: 0;
    width: v-bind(videoWidthPx);

    .game-quick-details-middle {
      position: relative;

      .video-inner-header {
        display: flex;
        flex-flow: row nowrap;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;

        .game-title.title.title-simple, .personal-label {
          font-size: $size-6;
          border-radius: $radius;
          margin: 0.5rem;
          padding: 0.5rem ($box-padding - 0.5rem);
          line-height: inherit;
        }

        .game-title.title.title-simple {
          @include video-inner-tag-like-colors($dark, $dark, $white, $white);
          // background-color: color.change($dark, $alpha: 0.6);
        }

        .personal-label {
          @include video-inner-tag-like-colors($primary, $primary, $white, $white);
          // background-color: color.change($primary, $alpha: 0.6);
        }
      }

      .game-links {
        position: absolute;
        bottom: 0;
        left: 0;
        margin-bottom: 1rem;

        .game-link {
          padding: 0.5rem;
          border-radius: $radius;

          @include video-inner-tag-like-colors($dark, $dark, $white, $link);
          // background-color: color.change($dark, $alpha: 0.6);

          // &:hover {
          //   background-color: color.change($dark, $alpha: 0.95);
          //   border-color: $link;
          // }
        }
      }

      .game-video {
        border-radius: $box-radius $box-radius 0 0;
      }
    }

    .game-quick-details-bottom {
      padding: 1rem $box-padding;
    }

    .game-quick-details-bottom .title {
      color: $link;
    }

    &.box {
      display: inline-block;
    }

    .bullet-list {
      display: block;
    }

    .box-columns {
      display: flex;
      flex-flow: row nowrap;
      align-items: start;

      .highlights-column {
        flex: 5;
      }

      .bullets-column {
        flex: 4;
      }

      // .box-column {
      //   flex-basis: fit-content;
      // }

      // .bullets-column {
      //   margin-left: 1rem;
      // }
    }

    .game-highlights {
      .bullet-list-item {
        margin-top: 0.75rem;
        margin-bottom: 1rem;
      }

      // .bullet-list {
      //   margin-bottom: 2rem;
      // }

      .bullet-list, .bullet-list-item {
        &, span {
          font-size: $size-5;
        }
      }
    }

    .game-integrations {
      margin-bottom: 0.5rem;
    }

    .list-item {
      display: inline-block;

      &::after {
        content: ', ';
        margin-right: 0.5rem;
      }

      &:last-child::after {
        content: '';
      }
    }

    .game-links {
      display: flex;
      flex-flow: row wrap;
      justify-content: start;
      align-items: center;
      gap: 2rem;
      margin-left: 0.25rem;
      // margin-top: 0.5rem;
    }

    .game-video {
      width: 100%;
      // border-radius: 0.25rem;
    }
  }
</style>
