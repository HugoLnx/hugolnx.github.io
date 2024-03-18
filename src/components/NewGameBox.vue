<template>
  <article
    class="new-game-box"
    :class="{
      'is-vertical-video': isVerticalVideo,
      'is-horizontal-video': !isVerticalVideo,
      'is-selected': isSelected,
      'is-not-selected': !isSelected,
    }"
    @click.prevent.stop="toggleGameSelection"
  >
    <div class="screen-overlay" />
    <div class="game-box-content">
      <div class="game-box-middle">
        <header class="video-header">
          <h3 class="game-title title page-section-subtitle">
            {{ title }}
          </h3>
        </header>
        <section class="game-preview-section">
          <h4 class="title">
            Preview
          </h4>
          <AutoplayVideo
            class="game-preview"
            :src="videoSrc"
            :poster="links.poster"
          />
        </section>
        <nav class="game-links-section">
          <h4 class="title">
            Links
          </h4>
          <div class="game-links">
            <div
              v-if="links.steam"
              class="game-link-wrapper"
            >
              <GameLink
                title="Steam"
                :href="links.steam"
                icon-classes="fa-brands fa-steam-symbol"
                @click.stop
              />
            </div>
            <div
              v-if="links.googlePlay"
              class="game-link-wrapper"
            >
              <GameLink
                title="Store"
                :href="links.googlePlay"
                icon-classes="fa-brands fa-google-play"
                @click.stop
              />
            </div>
            <div
              v-if="links.trailer"
              class="game-link-wrapper"
            >
              <GameLink
                title="Trailer"
                :href="links.trailer"
                icon-classes="fa-solid fa-play"
                @click.stop
              />
            </div>
            <div
              v-if="links.gameplay"
              class="game-link-wrapper"
            >
              <GameLink
                title="Gameplay"
                :href="links.gameplay"
                icon-classes="fa-solid fa-gamepad"
                @click.stop
              />
            </div>
          </div>
        </nav>
      </div>
      <GameToggableContent
        ref="toggableContent"
        class="game-box-bottom"
        :game-box="$el"
        :show-label="`${title} Info`"
        :hide-label="`${title} Info`"
        @toggled="refreshGameSelection"
      >
        <div class="game-sections">
          <section class="game-section game-highlights">
            <h4 class="title game-section-title">
              Highlights
            </h4>
            <BulletList
              icon-classes="fa-solid fa-star"
            >
              <BulletListItem v-for="topic in highlights" :key="topic">
                {{ topic }}
              </BulletListItem>
            </BulletList>
          </section>
          <section
            v-if="integrations?.length > 0"
            class="game-section game-integrations"
          >
            <h4 class="title game-section-title">
              Integrations
            </h4>
            <ul class="inline-list">
              <li
                v-for="integration in integrations"
                :key="integration"
                class="list-item"
              >
                {{ integration }}
              </li>
            </ul>
          </section>
          <section class="game-section game-details">
            <div class="game-details-wrapper">
              <h4 class="title game-section-title">
                Details
              </h4>
              <section class="game-details-section">
                <h5 class="game-details-section-title">
                  Made with
                </h5>
                <p class="game-details-section-content">
                  {{ engine }}
                </p>
              </section>
              <section class="game-details-section">
                <h5 class="game-details-section-title">
                  Platforms
                </h5>
                <ul class="inline-list game-details-section-content">
                  <li
                    v-for="platform in platforms"
                    :key="platform"
                    class="list-item"
                  >
                    {{ platform }}
                  </li>
                </ul>
              </section>
              <section class="game-details-section">
                <h5 class="game-details-section-title">
                  Commercial Context
                </h5>
                <p class="game-details-section-content">
                  {{ commercialLabel }}
                </p>
              </section>
            </div>
          </section>
        </div>
      </GameToggableContent>
    </div>
  </article>
</template>

<script setup>
import { ref } from 'vue';
import AutoplayVideo from './AutoplayVideo.vue';
import BulletList from './BulletList.vue';
import BulletListItem from './BulletListItem.vue';
import GameLink from './GameLink.vue';
import GameToggableContent from './GameToggableContent.vue';
import { px } from '../js/utils';

const BASE_HORIZONTAL_VSIZE = { width: 640, height: 360 };
const BASE_VERTICAL_VSIZE = { width: 270, height: 480 };
const COMMERCIAL_LABELS = {
    'self-published': 'Self-Published Indie',
    'freelance-job': 'Freelance Job',
    'royalty-earning': 'Royalty Earning',
    personal: 'Personal Demo',
    prototype: 'Personal Prototype',
};

const { game } = defineProps({
    game: { type: Object, required: true },
});
const isSelected = ref(false);
const toggableContent = ref(null);

const {
    shortTitle: title,
    isMobile: isVerticalVideo,
    platforms,
    links,
    engine,
} = game;
const {
    previewLow: videoSrc,
} = links;
const {
    technical: highlights,
    integrations,
} = game.bullets;
const commercialLabel = COMMERCIAL_LABELS[game.commercial];

const baseVideoSize = isVerticalVideo
    ? BASE_VERTICAL_VSIZE
    : BASE_HORIZONTAL_VSIZE;

function toggleGameSelection() {
    toggableContent.value?.toggle();
}

function refreshGameSelection() {
    isSelected.value = toggableContent.value?.isContentOn();
}
</script>

<style lang="scss">
  @use 'sass:color';
  @import '../css/bulma-custom.scss';

  // Video Size
  .new-game-box {
    flex-basis: 100%;

    .game-preview {
      width: 100%;
      max-width: v-bind('px(baseVideoSize.width)');
      height: auto;
      aspect-ratio: v-bind('baseVideoSize.width') / v-bind('baseVideoSize.height');
      border-radius: calc($box-radius * 1.2);
    }
  }

  // Video Header
  .new-game-box {
    .video-header {
      width: 100%;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;

      .title.game-title {
        margin-top: 2.5rem;
        margin-bottom: 0.5rem;
      }
    }

    &:first-child .video-header .title.game-title {
      margin-top: 0;
    }
  }

  // Game Box Content
  .new-game-box {
    .game-box-content {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
    }

    .video-header .title.game-title.page-section-subtitle {
      padding-top: 0;
      margin-top: 0;
    }
  }

  // Middle Layout
  .new-game-box {
    .game-box-middle, .game-preview-section, .game-preview {
      width: 100%;
    }

    .game-box-middle, .game-preview-section {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
    }
  }

  // Game links styling
  .new-game-box {
    .game-links-section {
      width: 100%;
      display: flex;
      flex-flow: column wrap;
      align-items: center;
    }

    &.is-vertical-video {
      .game-links {
        max-width: v-bind('px(baseVideoSize.width*1.3)');
      }
    }

    &.is-horizontal-video {
      .game-links {
        max-width: v-bind('px(baseVideoSize.width*0.6)');
      }
    }

    .game-links {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      align-items: center;
      gap: 0.5rem;
      margin: 0.25rem 0;
      width: 100%;

      .game-link-wrapper {
        flex-grow: 1;
        align-self: center;

        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
      }

      .game-link {
        display: inline-block;
        padding: 0.5rem 1rem;
        border-radius: $radius;
        border: $button-border-width solid;

        background-color: color.change($dark, $alpha: 0.8);
        border-color: color.change($white, $alpha: 0.85);

        &:hover {
          background-color: color.change($dark, $alpha: 0.95);
          border-color: color.change($link, $alpha: 1);
        }
      }
    }
  }

  // Game Sections styling
  .new-game-box {
    .game-sections {
      display: flex;
      flex-flow: column nowrap;
      align-items: stretch;

      .game-section {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
      }

      .title.game-section-title {
        font-size: $size-5;
        text-align: center;
        color: $color-title2;
        margin: 1.5rem 0 0.5rem 0;
      }
    }

    .game-details-wrapper {
      width: 100%;
    }

    .game-details {
      .game-details-section {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
      }

      .game-details-section-title {
        text-align: right;
        font-size: $size-6;
        color: $color-title3;
        width: 45%;
        margin-right: 0.5rem;
      }

      .game-details-section-content {
        text-align: left;
        flex-grow: 3;
        width: 50%;
        margin-left: 0.5rem;
      }

      .game-details-section-title, .game-details-section-content {
        display: inline-block;
      }
    }
  }

  // Toggable Content Styling
  .game-box-bottom {
    margin-top: 0.75rem;

    .game-sections {
      .game-section:first-child {
        .title.game-section-title {
          margin-top: 0;
        }
      }
    }
  }

  // Game Highlights Styling
  .game-highlights {
    font-size: $size-5;

    .bullet-list {
      margin: 0.5rem 1rem;
      gap: 1.5rem;
    }
  }

  // Game Integrations Styling
  .game-integrations {
    .inline-list {
      margin: 0 1rem;
      justify-content: center;
      align-items: center;
    }
  }

  // Semantic Hide
  .new-game-box {
    .game-links-section .title,
    .game-preview-section .title
    {
      @include semantic-hide;
    }
  }

  // Gallery View Layout
  @include from($game-gallery-breakpoint) {
    .new-game-box .game-links .game-link {
      padding: 0.25rem 0.5rem;
    }

    .new-game-box .video-header .title.game-title.page-section-subtitle {
      margin-top: 0rem;
    }
  }
  @include tablet {
    .new-game-box {
      flex-basis: 49%;
      flex-grow: 1;
      max-width: v-bind('px(baseVideoSize.width)');
    }
  }

  @include desktop {
    .new-game-box {
      flex-basis: 40%;

      &.is-vertical-video {
        flex-basis: v-bind('px(baseVideoSize.width * 0.4)');
      }
    }
  }

  // Game box Selected
  .new-game-box {
    .game-box-content {
      // margin-top: 2rem;
      padding: 1rem 0.25rem;
      border-radius: $box-radius;
      transition: background-color 200ms ease-out;
    }

    .game-preview-section {
      border: solid 1px rgba(0, 0, 0, 0);
      border-radius: $box-radius;
      overflow: hidden;
      transition: border 200ms ease-out;

      .game-preview {
        transition: transform 200ms ease-out;
      }
    }

    &:hover, &.is-selected {
      .game-box-content {
        cursor: pointer;

        .game-preview-section {
          border: solid 1px color.change($link, $alpha: 0.3);

          .game-preview {
            position: relative;
            transform: scale(1.25);
          }
        }
      }
    }

    .game-box-content {
      transition: background-color 200ms ease-out;
    }

    &:hover, &.is-selected {
      .game-box-content {
        background-color: $game-box-selected-color;
      }
    }

    @include from($game-gallery-breakpoint) {
      &.is-selected .game-box-content {
        background-color: $game-box-selected-dark-color;
      }
    }
  }

  // Gallery View Styling
  .screen-overlay {
    cursor: pointer;
    position: fixed;
    z-index: -9999;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    background-color: black;
    transition: opacity 200ms ease-out;
  }

  @include from($game-gallery-breakpoint) {
    .new-game-box {
      // Set screen overlay
      &.is-selected .screen-overlay {
        opacity: 0.95;
      }

      .game-box-content {
        position: relative;
        overflow: visible;
      }

      // Set z-indexes
      $z-index: 500;
      &.is-selected {
        .game-box-content {
          z-index: $z-index;
        }

        .video-wrapper {
          z-index: $z-index;

          .video-poster {
            z-index: $z-index + 1;
          }

          .video-overlay {
            z-index: $z-index + 2;
          }
        }

        .toggable-content .inner-content {
          z-index: $z-index - 1;
        }

        .screen-overlay {
          z-index: $z-index - 2;
        }
      }
    }
  }
</style>
