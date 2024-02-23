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
        Game Developer
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
  </aside>
</template>

<script setup>
import SocialIconLink from './SocialIconLink.vue';
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
