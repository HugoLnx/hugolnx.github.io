<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> -->
          HUGOLNX
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
          <NavLink href="/" class="navbar-item">
            Overview
          </NavLink>

          <NavLink href="/portfolio" class="navbar-item">
            Portfolio
          </NavLink>

          <NavLink href="/skills" class="navbar-item">
            Skills
          </NavLink>

          <NavLink href="/work-experience" class="navbar-item">
            Work Experience
          </NavLink>

          <NavLink href="/resume" class="navbar-item">
            Resume
          </NavLink>

          <NavLink href="/about-me" class="navbar-item">
            About Me
          </NavLink>

          <NavLink href="/contact" class="navbar-item">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import NavLink from './NavLink.vue';
</script>
