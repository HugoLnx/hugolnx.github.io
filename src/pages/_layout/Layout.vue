<template>
  <MainNavbar />
  <div id="main-body">
    <div id="main-middle">
      <div class="lnx-container vertical-stretch">
        <div id="main-middle-view" class="vertical-stretch">
          <main id="main-middle-view-content" class="vertical-stretch">
            <slot />
          </main>
        </div>
      </div>
    </div>
    <MainFooter />
  </div>
</template>

<script setup>
import MainNavbar from './MainNavbar.vue';
import MainFooter from './MainFooter.vue';
import '../../css/index.scss';
</script>

<style lang="scss">
@import '../../css/bulma-custom.scss';

#main-body {
  margin-top: $navbar-height;
  display: flex;
  flex-flow: column nowrap;

  #main-middle {
    flex-grow: 1;

    #main-middle-sidebar-content {
      padding: 1.5rem 0.75rem;
    }

    #main-middle-view-content {
      padding: 1.5rem;
    }

    #main-middle-sidebar {
      background-color: $main-sidebar-background-color;
    }

    #main-middle-sidebar-column {
      min-width: 300px;
    }

    .lnx-container {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      width: 100%;

      #main-middle-view {
        background-color: $main-sidebar-background-color; // $main-view-background-color;
        padding: 0 1rem;

        @media (min-width: 1300px) {
          max-width: 1400px;
        }

        @media (max-width: 1300px) {
          margin: 0 1rem;
        }
      }
    }
  }

  footer {
    flex-basis: content;
    min-height: 250px;
  }
}

.vertical-stretch {
  height: 100%;
}

body, html, #page-view, #main-body {
  height: 100vh;
  @extend .is-fullheight;
}
</style>
