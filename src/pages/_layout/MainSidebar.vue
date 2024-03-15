<template>
  <aside>
    <div class="block flex-column-center">
      <figure class="image is-128x128">
        <img class="is-rounded" src="./img/me-268.jpg">
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

    <div class="block">
      <h3 class="title title-simple is-5">
        Background
      </h3>
      <BulletList :icon-classes="bulletListIconClasses">
        <BulletListItem>11 commercial indie games published.</BulletListItem>
        <BulletListItem>14 years working with games and web.</BulletListItem>
        <BulletListItem>6 years working part-time with Unity / C#.</BulletListItem>
      </BulletList>
    </div>

    <div class="block">
      <h3 class="title title-simple is-5">
        Skills
      </h3>
      <BulletList :icon-classes="bulletListIconClasses">
        <BulletListItem>Unity / C#</BulletListItem>
        <BulletListItem>Desktop, Android, and WebGL</BulletListItem>
        <BulletListItem>Performance and Optimization</BulletListItem>
        <BulletListItem>Software Engineering</BulletListItem>
        <BulletListItem>Web Development</BulletListItem>
      </BulletList>
    </div>

    <div class="block">
      <h3 class="title title-simple is-5">
        Toolbelt
      </h3>
      <TagList default-classes="is-link is-rounded">
        <TagItem>Git</TagItem>
        <TagItem>Unity Cloud Build</TagItem>
        <TagItem>DOTween</TagItem>
        <TagItem>InControl</TagItem>
        <TagItem>Cinemachine</TagItem>
        <TagItem>Odin</TagItem>
        <TagItem>Steam API</TagItem>
        <TagItem>Steam Leaderboards</TagItem>
        <TagItem>Steam Achievements</TagItem>
        <TagItem>Google Admob</TagItem>
        <TagItem>Unity IAP</TagItem>
        <TagItem>Firebase Firestore</TagItem>
        <TagItem>Firebase Storage</TagItem>
        <TagItem>Firebase Functions</TagItem>
        <TagItem>Firebase Hosting</TagItem>
        <TagItem>Three.js</TagItem>
        <TagItem>Shaders (basic)</TagItem>
        <TagItem>REST APIs</TagItem>
        <TagItem>Lua</TagItem>
        <TagItem>Ruby on Rails</TagItem>
        <TagItem>Python</TagItem>
        <TagItem>JavaScript</TagItem>
        <TagItem>Redis</TagItem>
        <TagItem>...</TagItem>
      </TagList>
    </div>
  </aside>
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
</style>
