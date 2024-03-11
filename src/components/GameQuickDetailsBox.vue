<template>
  <div
    class="box game-quick-details hover-grow init-video-only"
    :class="{ 'is-vertical-video': isMobile, 'is-horizontal-video': !isMobile}"
  >
    <div class="box-content">
      <div class="game-quick-details-middle">
        <div class="video-inner-header">
          <h2 class="game-title title title-simple">
            {{ title }}
          </h2>
          <p v-if="isPersonal" class="video-inner-tag">
            personal prototype
          </p>
          <p v-if="isFreelance" class="video-inner-tag">
            as freelancer
          </p>
        </div>
        <AutoplayVideo
          class="game-video"
          :src="videoSrc"
          :width="videoSize.width"
          :height="videoSize.height"
          :poster="links.poster"
        />
        <div class="game-links">
          <GameLink
            v-if="links.steam"
            title="Steam"
            :href="links.steam"
            icon-classes="fa-brands fa-steam-symbol"
          />
          <GameLink
            v-if="links.googlePlay"
            title="Store"
            :href="links.googlePlay"
            icon-classes="fa-brands fa-google-play"
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
        <div class="details-columns">
          <div class="details-column highlights-column">
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
          <div class="details-column bullets-column">
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

const { isMobile } = defineProps({
    title: { type: String, required: true },
    videoSrc: { type: String, required: true },
    highlights: { type: Array, required: true },
    integrations: { type: Array, required: true, default: () => [] },
    platforms: { type: Array, required: true },
    engine: { type: String, required: true },
    links: { type: Object, required: true },
    isPersonal: { type: Boolean, default: false },
    isFreelance: { type: Boolean, default: false },
    isMobile: { type: Boolean, default: false },
});

const HORIZONTAL_VIDEO_SIZE = { width: 640, height: 360 };
const VERTICAL_VIDEO_SIZE = { width: 270, height: 480 };

const { colors: bulmaColors } = bulmaConstants;
const starColor = bulmaColors.yellow;

const videoSize = isMobile ? VERTICAL_VIDEO_SIZE : HORIZONTAL_VIDEO_SIZE;

const videoWidthPx = `${videoSize.width}px`;
const videoHeightPx = `${videoSize.height}px`;
const boxMaxWidthPx = `${HORIZONTAL_VIDEO_SIZE.width}px`;
const verticalDetailsMinWidthPx = `${HORIZONTAL_VIDEO_SIZE.width - videoSize.width}px`;
</script>

<style lang="scss">
  @import '../css/bulma-custom.scss';

  .hover-grow {
    transition: transform 200ms ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  .box.game-quick-details {
    padding: 0;
    display: inline-block;

    &.is-horizontal-video {
      width: v-bind(videoWidthPx);
    }

    &.is-vertical-video {
      max-width: v-bind(boxMaxWidthPx);

      .game-quick-details-middle, .game-quick-details-bottom {
        height: v-bind(videoHeightPx);
        min-height: v-bind(videoHeightPx);
      }

      .game-quick-details-bottom {
        min-width: v-bind(verticalDetailsMinWidthPx);
      }

      .game-quick-details-middle {
        &, video, .video-inner-header, .game-links {
          width: v-bind(videoWidthPx);
          min-width: v-bind(videoWidthPx);
        }
      }

      .box-content {
        display: flex;
        flex-flow: row nowrap;
      }

      .game-quick-details-bottom {
        .details-columns {
          flex-flow: column nowrap;
        }
      }
    }
  }
</style>

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

  .game-quick-details-middle {
    position: relative;

    .video-inner-header {
      display: flex;
      flex-flow: row nowrap;
      position: absolute;
      top: 0;
      left: 0;

      .game-title.title.title-simple, .video-inner-tag {
        font-size: $size-6;
        border-radius: $radius;
        margin: 0.5rem;
        padding: 0.5rem ($box-padding - 0.5rem);
        line-height: inherit;
      }

      .game-title.title.title-simple {
        @include video-inner-tag-like-colors($dark, $dark, $white, $white);
      }

      .video-inner-tag {
        @include video-inner-tag-like-colors($primary, $primary, $white, $white);
      }
    }
  }

  .game-links {
    display: flex;
    flex-flow: row wrap;

    position: absolute;
    bottom: 0;
    left: 0;
    margin-bottom: 1rem;
    margin-left: 0.25rem;

    .game-link {
      padding: 0.5rem;
      border-radius: $radius;

      @include video-inner-tag-like-colors($dark, $dark, $white, $link);
    }
  }

  .is-horizontal-video .game-links {
    justify-content: start;
    align-items: center;
    gap: 2rem;
  }

  .is-vertical-video .game-links {
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }

  .game-video {
    width: 100%;
  }

  .is-horizontal-video .game-video {
    border-radius: $box-radius $box-radius 0 0;
  }

  .is-vertical-video .game-video {
    border-radius: $box-radius 0 0 $box-radius;
  }
</style>

<style lang="scss">
  @use 'sass:color';
  @import '../css/bulma-custom.scss';

  $base-z-index: 15;
  $hover-z-index: 30;

  @mixin set-z-indexes($z-index) {
    z-index: $z-index;

    .video-wrapper {
      z-index: $z-index;

      .video-poster {
        z-index: $z-index + 1;
      }

      .video-overlay {
        z-index: $z-index + 2;
      }
    }

    .game-links, .video-inner-header {
      z-index: $z-index + 3;
    }

    .game-quick-details-bottom {
      z-index: $z-index - 1;
    }
  }

  .game-quick-details.init-video-only {
    position: relative;
    @include set-z-indexes($base-z-index);

    .game-quick-details-bottom {
      position: absolute;
      opacity: 0;
      pointer-events: none;
      transition: opacity 200ms ease-in-out;
    }

    &.is-horizontal-video .game-quick-details-bottom {
      left: 0;
      bottom: 2rem;
      padding-top: 3rem;
      transform: translateY(100%);
    }

    &.is-vertical-video .game-quick-details-bottom {
      right: 2rem;
      top: 0;
      padding-left: 3rem;
      transform: translateX(100%);
    }

    &:hover {
      @include set-z-indexes($hover-z-index);

      .game-quick-details-bottom {
        transition: opacity 200ms ease-in-out;
        opacity: 1;
        pointer-events: all;
        margin: 0;
      }
    }

    .game-video {
      border-radius: $box-radius;
    }

    .game-quick-details-bottom {
      border-radius: $box-radius;
      background-color: color.change(#1c4b52, $alpha: 0.95);
    }
  }

  .game-quick-details-bottom {
    .details-columns {
      display: flex;
      align-items: start;
    }
  }

  .is-horizontal-video .game-quick-details-bottom {
    .details-columns {
      flex-flow: row nowrap;

      .highlights-column {
        flex: 5;
      }

      .bullets-column {
        flex: 4;
      }
    }
  }

  .is-vertical-video .game-quick-details-bottom {
    .details-columns {
      flex-flow: column nowrap;
    }
  }

  .game-quick-details-bottom {
    padding: 1rem $box-padding;
    .title {
      color: $link;
    }

    &.box {
      display: inline-block;
    }

    .bullet-list {
      display: block;
    }

    .game-highlights {
      .bullet-list-item {
        margin-top: 0.75rem;
        margin-bottom: 1rem;
      }

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
  }
</style>
