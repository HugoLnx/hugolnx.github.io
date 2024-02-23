<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> -->
          HUGO ROQUE
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="main-navbar-links"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="main-navbar-links" class="navbar-menu">
        <div class="navbar-start">
          <LinkC href="/" class="navbar-item">
            Overview
          </LinkC>

          <LinkC href="/portfolio" class="navbar-item">
            Portfolio
          </LinkC>

          <LinkC href="/skills" class="navbar-item">
            Skills
          </LinkC>

          <LinkC href="/work-history" class="navbar-item">
            Work History
          </LinkC>

          <LinkC href="/resume" class="navbar-item">
            Resume
          </LinkC>

          <LinkC href="/about-me" class="navbar-item">
            About Me
          </LinkC>

          <LinkC href="/contact" class="navbar-item">
            Contact
          </LinkC>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import LinkC from './LinkC.vue';
</script>
