<template>
  <section class="overview-page-section page-section">
    <h1 class="title page-section-title">
      {{ title }}
    </h1>

    <div class="blocks-list">
      <section class="block content-container introduction-section">
        <h2 class="title page-section-subtitle introduction-title">
          Introduction
        </h2>
        <figure class="image is-128x128">
          <img
            class="is-rounded"
            width="128"
            height="128"
            src="../../img/me-128-compressed.jpg"
          >
        </figure>
        <p class="title dev-title">
          {{ dev.name }}
        </p>
        <p class="subtitle dev-position">
          {{ dev.position }}
        </p>
        <nav class="social-media">
          <SocialIconLink
            v-for="social in dev.links"
            :key="social.name"
            :href="social.url"
            :icon-classes="social.iconClasses"
            :text="social.name"
          />
        </nav>
      </section>

      <div class="blocks-side-by-side">
        <section class="block bullets-block content-container">
          <h2 class="title page-section-subtitle">
            Background
          </h2>
          <BulletList
            :icon-classes="bulletListIconClasses"
            class="bullets-block-content"
          >
            <BulletListItem
              v-for="item in dev.background"
              :key="item"
            >
              {{ item }}
            </BulletListItem>
          </BulletList>
        </section>

        <section class="block bullets-block content-container">
          <h2 class="title page-section-subtitle">
            Skills
          </h2>
          <BulletList
            :icon-classes="bulletListIconClasses"
            class="bullets-block-content"
          >
            <BulletListItem
              v-for="skill in dev.skills"
              :key="skill"
            >
              {{ skill }}
            </BulletListItem>
          </BulletList>
        </section>
      </div>

      <section class="block bullets-block tags-block content-container">
        <h2 class="title page-section-subtitle">
          Professional Experience
        </h2>
        <TagList class="bullets-block-content">
          <TagItem
            v-for="tool in dev.tools"
            :key="tool"
          >
            {{ tool }}
          </TagItem>
        </TagList>
      </section>

      <section class="block bullets-block content-container">
        <h2 class="title page-section-subtitle">
          Games
        </h2>
        <p
          class="bullets-block-content"
        >
          <a
            href="/games"
            class="button is-link is-rounded is-outlined is-medium"
          >
            See all my games
          </a>
        </p>
      </section>
    </div>
  </section>
</template>

<script setup>
import SocialIconLink from '../../components/SocialIconLink.vue';
import BulletList from '../../components/BulletList.vue';
import BulletListItem from '../../components/BulletListItem.vue';
import TagList from '../../components/TagList.vue';
import TagItem from '../../components/TagItem.vue';
import data from './indexDataProvider';

const { dev, title } = data;
const bulletListIconClasses = 'fa-regular fa-circle-check has-text-success';
</script>

<style lang="scss">
@use 'sass:color';
@import '../../css/bulma-custom.scss';

.overview-page-section {
  .social-media {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 1rem;
  }

  @include tablet {
    .social-media {
      margin-top: 0.5rem;
      font-size: $size-5;
      gap: 2rem;

      .icon-text {
        line-height: $size-5;
      }

      .icon-raw-text {
        font-size: $size-6-l3;
        margin-top: 0.65rem;
      }
    }

    .introduction-section {
      .dev-title.title {
        font-size: $size-3;
      }

      .dev-position.subtitle {
        font-size: $size-4;
      }
    }
  }

  .tags-block {
    .tag-list {
      justify-content: center;

      .tag-item {
        background-color: darken($link, 20%);
        border-radius: $radius-rounded;
      }

      @at-root.is-mouse & .tag-item:hover {
        background-color: darken($link, 15%);
      }
    }
  }

  .blocks-list {
    display: flex;
    flex-flow: column wrap;
    align-items: stretch;
    gap: 2.5rem;
  }

  .bullets-block {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    // width: 100%;

    .bullet-list {
      font-size: $size-5;

      .bullet-list-item {
        margin-bottom: 1rem;
      }
    }

    @include from(400px) {
      .bullet-list {
        font-size: $size-4-l2;
        margin-top: 0.5rem;

        .bullet-list-item {
          margin-bottom: 1.2rem;
        }
      }
    }
  }

  .blocks-side-by-side {
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: inherit;
    justify-content: inherit;
    align-items: inherit;
    gap: inherit;
  }

  @include from(750px) {
    .blocks-side-by-side {
      margin: 0;
      padding: 0;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
      align-items: start;
      gap: 1rem;
      margin: 2rem 0;

      .content-container.block {
        width: unset;
        align-self: stretch;

        border: 1px solid color.change($white, $alpha: 0.5);
        background-color: color.change($link, $alpha: 0.1);
        padding: 0.5rem 1.5rem;
        border-radius: $box-radius;
        margin-bottom: 0;
      }
    }
  }
}

.overview-page-section {
  .title.page-section-subtitle.introduction-title {
    @include semantic-hide;
  }
}
</style>
