<template>
  <section class="overview-page-section page-section">
    <h1 class="title page-section-title semantic-hide">
      {{ title }}
    </h1>

    <div class="overview-page-sections">
      <section class="overview-subsection content-container profile-section">
        <h2 class="title page-section-subtitle profile-title">
          Profile
        </h2>
        <div class="profile">
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
        </div>
      </section>

      <section class="overview-subsection content-container introduction-section">
        <h2 class="title page-section-subtitle introduction-title">
          Hello and welcome
        </h2>
        <p class="introduction-text">
          <span
            v-for="phrase in dev.introduction"
            :key="phrase"
            class="introduction-phrase"
          >
            {{ phrase }}
          </span>
        </p>
      </section>

      <div class="two-columns-sections two-columns-skills">
        <section class="box overview-subsection content-container">
          <h2 class="title page-section-subtitle">
            Background
          </h2>
          <BulletList
            :icon-classes="bulletListIconClasses"
            class="overview-subsection-content"
          >
            <BulletListItem
              v-for="item in dev.background"
              :key="item"
            >
              {{ item }}
            </BulletListItem>
          </BulletList>
        </section>

        <section class="box overview-subsection content-container">
          <h2 class="title page-section-subtitle">
            Technical Skills
          </h2>
          <BulletList
            :icon-classes="bulletListIconClasses"
            class="overview-subsection-content"
          >
            <BulletListItem
              v-for="skill in dev.technicalSkills"
              :key="skill"
            >
              {{ skill }}
            </BulletListItem>
          </BulletList>
        </section>

        <section class="box overview-subsection content-container">
          <h2 class="title page-section-subtitle">
            Soft Skills
          </h2>
          <BulletList
            :icon-classes="bulletListIconClasses"
            class="overview-subsection-content"
          >
            <BulletListItem
              v-for="skill in dev.softSkills"
              :key="skill"
            >
              {{ skill }}
            </BulletListItem>
          </BulletList>
        </section>
      </div>

      <section class="overview-subsection tags-section content-container">
        <h2 class="title page-section-subtitle">
          Professional Experience
        </h2>
        <TagList class="overview-subsection-content">
          <TagItem
            v-for="tool in dev.tools"
            :key="tool"
          >
            {{ tool }}
          </TagItem>
        </TagList>
      </section>

      <section class="overview-subsection testimonials-section content-container">
        <h2 class="title page-section-subtitle">
          Testimonials
        </h2>
        <div class="testimonials">
          <article
            v-for="testimonial in dev.testimonials"
            :key="testimonial.author"
            class="testimonial box"
          >
            <p class="testimonial-quote">
              <span
                v-for="phrase in testimonial.quote"
                :key="phrase"
                class="quote-phrase"
              >
                {{ phrase.trim() }}
              </span>
            </p>
            <p class="testimonial-details">
              <span class="detail author-name">{{ testimonial.author }}</span>
              <span class="detail author-position">{{ testimonial.position }}</span>
              <span class="detail testimonial-date">{{ testimonial.date }}</span>
            </p>
          </article>
        </div>
      </section>

      <section class="overview-subsection content-container">
        <h2 class="title page-section-subtitle">
          See Next
        </h2>
        <div
          class="overview-subsection-content see-next-grid content-container"
        >
          <div
            v-for="item in seeNext"
            :key="item.action"
            class="see-next-item"
          >
            <p class="see-next-description">
              {{ item.description }}
            </p>
            <a
              :href="item.url"
              :target="item.isExternal ? '_blank' : '_self'"
              class="see-next-button button is-link is-rounded is-outlined"
            >
              {{ item.action }}
            </a>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import BulletList from '../../components/BulletList.vue';
import BulletListItem from '../../components/BulletListItem.vue';
import TagList from '../../components/TagList.vue';
import TagItem from '../../components/TagItem.vue';
import data from './indexDataProvider';

const { dev, title, seeNext } = data;
const bulletListIconClasses = 'fa-regular fa-circle-check has-text-success';
</script>

<style lang="scss">
@use 'sass:color';
@import '../../css/bulma-custom.scss';

// Introduction Styling
.overview-page-section {
  .profile-section {
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;

    .profile {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
    }

    @include from(450px) {
     .profile-section {
       .dev-title.title {
         font-size: $size-3;
       }

       .dev-position.subtitle {
         font-size: $size-4;
       }
     }
    }
  }

  .introduction-section {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    .introduction-text {
      display: flex;
      flex-flow: column nowrap;
      gap: 1rem;
      font-size: $size-6;
      margin: 0 1rem;
      max-width: 500px;
    }

    .introduction-phrase {
      color: $grey-light2;
      transition: color 200ms ease-out;
      transition-property: color, transform;

      @at-root .is-mouse &:hover {
        transform: translateX(0.3rem);
        color: $white-ter;
      }
    }

    @include from(550px) {
      .introduction-text {
        font-size: $size-5-l3;
        gap: 1.5rem;
        max-width: 700px;
      }
    }
  }

  .tags-section {
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

  .overview-page-sections {
    display: flex;
    flex-flow: column wrap;
    align-items: stretch;
    gap: 2.5rem;
    margin-top: 2rem;
  }

  .overview-subsection {
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

  .two-columns-sections {
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: start;
    gap: 1rem;

    .content-container {
      flex-basis: content;
      width: unset;
      align-self: stretch;
      margin-bottom: 0;
    }
  }
}

// Testimonials Styling
.testimonials {
  display: flex;
  flex-flow: column wrap;
  align-items: stretch;

  .testimonial {
    max-width: 600px;

    .testimonial-quote {
      display: flex;
      flex-flow: column nowrap;
      gap: 1rem;

      font-size: $size-6;
      @include from(500px) {
        font-size: $size-5-l3;
      }
      font-style: italic;
      margin-bottom: 0.5rem;

      .quote-phrase {
        color: $grey-lightest;
        transition: color 200ms ease-out;
        transition-property: color, transform;

        @at-root .is-mouse &:hover {
          transform: translateX(0.3rem);
          color: $white;
        }

        &:first-child:before {
          content: open-quote;
        }
        &:last-child:after {
          content: close-quote;
        }
      }
    }

    .testimonial-details {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      margin-top: 0.5rem;

      font-size: $size-6-l3;
      color: $grey-light2;
      text-align: center;

      .detail {
        &:not(:last-child):after {
          content: '•';
          margin: 0 0.5rem;
        }

        @include until(500px) {
          &:nth-last-child(2):after {
            content: '';
            margin: 0;
          }
          &:last-child {
            flex-basis: 100%;
          }
        }
      }
    }
  }
}

// See Next Styling
.see-next-grid {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 2rem;
  width: 100%;

  .see-next-item {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 0.5rem;
    width: 100%;

    .see-next-description {
      text-align: center;
      font-size: $size-6;
    }

    .see-next-button {
      flex-basis: content;
    }
  }

  @include tablet {
    flex-flow: column nowrap;
    align-items: center;

    .see-next-item {
      max-width: 540px;
      flex-flow: row nowrap;
      justify-content: stretch;
      align-items: center;
      align-self: center;
      gap: 2rem;

      .see-next-description {
        flex-basis: 360px;
        font-size: $size-5-l3;
        text-align: right;
      }

      .see-next-button {
        width: 180px;
        flex-basis: 180px;
      }
    }
  }
}

// Box Hover
.overview-page-section {
  @include box-hover-on-children();
}

.overview-page-section {
  .title.page-section-subtitle.profile-title {
    @include semantic-hide;
  }
}
</style>
