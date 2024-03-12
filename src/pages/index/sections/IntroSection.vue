<template>
  <div class="intro-section">
    <div class="block flex-column-center">
      <figure class="image is-128x128">
        <img class="is-rounded" src="../../_layout/img/me-268.jpg">
      </figure>
      <h1 class="title">
        Hugo Roque
      </h1>
      <h2 class="subtitle">
        Gameplay Programmer
      </h2>
      <div class="social-media">
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
      </div>
    </div>

    <div class="blocks-list">
      <div class="block bullets-block">
        <h3 class="title title-simple">
          Background
        </h3>
        <BulletList :icon-classes="bulletListIconClasses">
          <BulletListItem>11 indie games published</BulletListItem>
          <BulletListItem>14 years developing software</BulletListItem>
          <BulletListItem>6 years part-time with Unity / C#</BulletListItem>
        </BulletList>
      </div>

      <div class="block bullets-block">
        <h3 class="title title-simple">
          Skills
        </h3>
        <BulletList :icon-classes="bulletListIconClasses">
          <BulletListItem>Unity / C#</BulletListItem>
          <BulletListItem>Software Engineering</BulletListItem>
          <BulletListItem>Performance and Optimization</BulletListItem>
          <BulletListItem>Desktop, Android, and WebGL</BulletListItem>
          <BulletListItem>Web Development</BulletListItem>
        </BulletList>
      </div>

      <div class="block bullets-block">
        <h3 class="title title-simple">
          Professional Experience
        </h3>
        <TagList default-classes="is-link is-rounded">
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
      </div>
    </div>
  </div>
</template>

<script setup>
import SocialIconLink from '../../../components/SocialIconLink.vue';
import BulletList from '../../../components/BulletList.vue';
import BulletListItem from '../../../components/BulletListItem.vue';
import TagList from '../../../components/TagList.vue';
import TagItem from '../../../components/TagItem.vue';

const bulletListIconClasses = 'fa-regular fa-circle-check has-text-success';
</script>

<style lang="scss">
@import '../../../css/bulma-custom.scss';

.intro-section {
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

  .blocks-list {
    display: flex;
    flex-flow: column wrap;
    align-items: stretch;
  }

  .bullets-block {
    .title {
      font-size: $size-5;
      text-align: center;
      border-bottom: 1px solid #ddd;
      padding-bottom: 0.5rem;
      margin-bottom: 0.5rem;
      margin-top: 1rem;
    }
  }

  @include tablet {
    .title {
      font-size: $size-3;
    }

    .blocks-list {
      flex-flow: row wrap;
      justify-content: center;
      gap: 0 3rem;
      margin-top: 3rem;
    }

    .bullets-block {
      min-width: 300px;
      max-width: 640px;

      .bullet-list {
        font-size: $size-5;

        .bullet-list-item {
          margin-bottom: 1rem;
        }
      }
    }
  }
}
</style>
