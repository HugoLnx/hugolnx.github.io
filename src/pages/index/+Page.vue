<template>
  <section class="overview-page-section page-section">
    <h2 class="title page-section-title">
      {{ title }}
    </h2>
    <section class="block content-container">
      <h3 class="title page-section-subtitle introduction-title">
        Introduction
      </h3>
      <figure class="image is-128x128">
        <img
          class="is-rounded"
          width="128"
          height="128"
          src="../../img/me-128-compressed.jpg"
        >
      </figure>
      <p class="title">
        {{ dev.name }}
      </p>
      <p class="subtitle">
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

    <div class="blocks-list">
      <section class="block bullets-block content-container">
        <h3 class="title page-section-subtitle">
          Background
        </h3>
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
        <h3 class="title page-section-subtitle">
          Skills
        </h3>
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

      <section class="block bullets-block tags-block content-container">
        <h3 class="title page-section-subtitle">
          Professional Experience
        </h3>
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
        <h3 class="title page-section-subtitle">
          Games
        </h3>
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
@import '../../css/bulma-custom.scss';

.overview-page-section {
  .social-media {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 1rem;
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
  }
}

.overview-page-section {
  .title.page-section-subtitle.introduction-title {
    @include semantic-hide;
  }
}
</style>
