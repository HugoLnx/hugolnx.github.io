<template>
  <section class="overview-page-section page-section">
    <h2 class="title page-section-title">
      Profile
    </h2>
    <section class="block flex-column-center">
      <h3 class="title page-section-subtitle introduction-title">
        Introduction
      </h3>
      <figure class="image is-128x128">
        <img class="is-rounded" src="./img/me-128-compressed.jpg">
      </figure>
      <p class="title">
        Hugo Roque
      </p>
      <p class="subtitle">
        Gameplay Programmer
      </p>
      <nav class="social-media">
        <SocialIconLink
          href="https://store.steampowered.com/developer/sensengames"
          icon-classes="fa-brands fa-steam"
          text="Games"
        />
        <SocialIconLink
          href="https://github.com/hugolnx"
          icon-classes="fa-brands fa-github"
          text="Github"
        />
        <SocialIconLink
          href="https://www.linkedin.com/in/hugolnx/"
          icon-classes="fa-brands fa-linkedin"
          text="LinkedIn"
        />
        <SocialIconLink
          href="https://www.shadertoy.com/user/hugolnx"
          icon-classes="fa-solid fa-pen-nib"
          text="Shaders"
        />
        <SocialIconLink
          href="https://bit.ly/hugolnx-resume"
          icon-classes="fa-solid fa-file-lines"
          text="Resume"
        />
        <SocialIconLink
          href="mailto:hugolnx@gmail.com"
          icon-classes="fa-solid fa-envelope"
          text="Email"
        />
      </nav>
    </section>

    <div class="blocks-list">
      <section class="block bullets-block">
        <h3 class="title page-section-subtitle">
          Background
        </h3>
        <BulletList
          :icon-classes="bulletListIconClasses"
          class="bullets-block-content"
        >
          <BulletListItem>11 indie games published</BulletListItem>
          <BulletListItem>14 years developing software</BulletListItem>
          <BulletListItem>6 years part-time with Unity / C#</BulletListItem>
        </BulletList>
      </section>

      <section class="block bullets-block">
        <h3 class="title page-section-subtitle">
          Skills
        </h3>
        <BulletList
          :icon-classes="bulletListIconClasses"
          class="bullets-block-content"
        >
          <BulletListItem>Unity / C#</BulletListItem>
          <BulletListItem>Software Engineering</BulletListItem>
          <BulletListItem>Performance and Optimization</BulletListItem>
          <BulletListItem>Desktop, Android, and WebGL</BulletListItem>
          <BulletListItem>Web Development</BulletListItem>
        </BulletList>
      </section>

      <section class="block bullets-block tags-block">
        <h3 class="title page-section-subtitle">
          Professional Experience
        </h3>
        <TagList class="bullets-block-content">
          <TagItem>Unity / C#</TagItem>
          <TagItem>Unity Cloud Build</TagItem>
          <TagItem>DOTween</TagItem>
          <TagItem>InControl</TagItem>
          <TagItem>Cinemachine</TagItem>
          <TagItem>Odin</TagItem>
          <TagItem>Steam API</TagItem>
          <TagItem>Steam Leaderboards</TagItem>
          <TagItem>Steam Achievements</TagItem>
          <TagItem>Google Admob</TagItem>
          <TagItem>Unity Ads</TagItem>
          <TagItem>Unity IAP</TagItem>
          <TagItem>Firebase Firestore</TagItem>
          <TagItem>Firebase Storage</TagItem>
          <TagItem>Firebase Functions</TagItem>
          <TagItem>Firebase Hosting</TagItem>
          <TagItem>Three.js</TagItem>
          <TagItem>Shaders</TagItem>
          <TagItem>REST APIs</TagItem>
          <TagItem>Lua</TagItem>
          <TagItem>Ruby on Rails</TagItem>
          <TagItem>Python</TagItem>
          <TagItem>JavaScript</TagItem>
          <TagItem>Node.js</TagItem>
          <TagItem>Redis</TagItem>
          <TagItem>Git</TagItem>
        </TagList>
      </section>

      <section class="block bullets-block">
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

const bulletListIconClasses = 'fa-regular fa-circle-check has-text-success';
</script>

<style lang="scss">
@import '../../css/bulma-custom.scss';

.overview-page-section {
  .flex-column-center {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

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
    width: 100%;

    .bullet-list {
      font-size: $size-5;

      .bullet-list-item {
        margin-bottom: 1rem;
      }
    }
  }

  @include tablet {
    .blocks-list {
      flex-flow: row wrap;
      justify-content: center;
      gap: 0 3rem;
      margin-top: 3rem;
    }

    .bullets-block-content {
      min-width: 300px;
      max-width: 640px;
    }
  }
}

.overview-page-section {
  .title.page-section-subtitle.introduction-title {
    @include semantic-hide;
  }
}
</style>
