<template>
  <section class="about-me-page-section page-section">
    <h1 class="title page-section-title">
      {{ title }}
    </h1>
    <div class="about-me-sections">
      <section class="intro-section content-container">
        <h2 class="semantic-hide">
          Introduction
        </h2>
        <p class="intro-text pre-photo">
          <span
            v-for="phrase in introText.prePhoto"
            :key="phrase"
          >
            {{ phrase }}
          </span>
        </p>
        <figure class="image is-128x128 intro-photo">
          <img
            class="is-rounded"
            width="128"
            height="128"
            src="../../img/me-128-compressed.jpg"
          >
        </figure>
        <p class="intro-text post-photo">
          <span
            v-for="phrase in introText.postPhoto"
            :key="phrase"
          >
            {{ phrase }}
          </span>
        </p>
      </section>

      <section
        v-for="section in sections"
        :key="section.title"
        :class="section.elementClasses"
        class="content-container"
      >
        <h2 class="title page-section-subtitle">
          {{ section.title }}
        </h2>
        <BulletListAuto
          :items="section.items"
          :icon-classes="section.iconClasses"
          :icon-color="BULLET_TITLE_COLOR"
          :hover-color="HOVER_COLOR"
        />
      </section>
    </div>
  </section>
</template>

<script setup>
import BulletListAuto from '../../components/BulletListAuto.vue';
import data from './aboutDataProvider';

const { title, introText, sections } = data;
const BULLET_TITLE_COLOR = 'rgb(85, 231, 202)';
const HOVER_COLOR = 'white';
</script>

<style lang="scss">
@use 'sass:color';
@import '../../css/bulma-custom.scss';

.about-me-page-section {

  .content-container {
    max-width: 600px;
  }

  .about-me-sections {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 3rem;
    margin: 0 0.5rem;

    font-size: $size-5-l2;
    word-spacing: 0.2rem;
    color: $grey-lighter;
  }

  .intro-section {
    .intro-text {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      gap: 0.5rem;
    }

    .intro-photo {
      margin-top: 0.5rem;
      margin-bottom: 1rem;
    }
  }

  .bullet-list {
    gap: 2rem;

    .bullet-list-item .icon-text {
      line-height: 2rem;
    }
  }

  .favorite-genres-section {
    .bullet-list {
      gap: 1rem;
    }
  }

  .outside-work-section {
    .bullet-list {
      gap: 0.5rem;
    }
  }

  .bullet-title {
    color: v-bind(BULLET_TITLE_COLOR);
    font-weight: bold;

    &::after {
      content: ':';
      margin-right: 0.5rem;
    }
  }
}
</style>
