<template>
  <nav class="navbar is-fixed-top top-zindex" role="navigation" aria-label="main navigation">
    <div class="container navbar-container">
      <div class="navbar-brand navbar-top">
        <a class="navbar-dev navbar-item" href="/">
          <span class="dev-name">{{ name }}</span>
          <span class="dev-position">{{ position }}</span>
        </a>
        <div class="navbar-item social-media">
          <SocialIconLink
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            :icon-classes="social.iconClasses"
            :text="social.name"
          />
        </div>
      </div>

      <div id="main-navbar-links" class="navbar-menu lnx-menu">
        <div class="navbar-start">
          <NavLink
            v-for="link in navLinks"
            :key="link.id"
            :href="link.url"
            :target="link.isExternal ? '_blank' : '_self'"
            class="navbar-item"
          >
            {{ link.title }}
          </NavLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import NavLink from './NavLink.vue';
import SocialIconLink from '../../components/SocialIconLink.vue';
import {
    socials,
    name,
    position,
    navLinks,
} from './navbarDataProvider';
</script>

<style lang="scss">
@import '../../css/bulma-custom.scss';

nav {
  &.navbar.is-fixed-top.top-zindex {
    z-index: 100;
  }

  .container.navbar-container {
    flex-flow: column nowrap;
  }

  a.navbar-dev {
    display: flex;
    flex-flow: column nowrap;
    align-items: start;

    .dev-name {
      @extend .title;
      @extend .is-4;
      text-transform: uppercase;
      font-weight: 700;
    }

    .dev-position {
      @extend .subtitle;
      @extend .is-6;
      color: $grey-light2;
    }
  }

  .social-media {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: end;
    gap: 1rem;
  }

  @include touch {
    .lnx-menu.navbar-menu {
      display: flex;

      .navbar-start {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-items: center;
      }
    }
  }

  @include desktop {
    .social-media {
      margin-left: 2rem;
      gap: 1.5rem;
    }

    .lnx-menu.navbar-menu {
      .navbar-start :first-child {
        margin-left: 0;
        padding-left: 0;
      }

      .navbar-start {
        display: flex;
        flex-flow: row nowrap;
        gap: 3rem;
      }
    }
  }
}
</style>
