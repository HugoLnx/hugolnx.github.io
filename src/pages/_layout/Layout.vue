<template>
  <MainNavbar />
  <div id="main-body">
    <div id="main-middle">
      <div class="container vertical-stretch">
        <div class="columns no-columns-spacing vertical-stretch">
          <div
            id="main-middle-sidebar-column"
            class="column is-3 is-hidden-mobile vertical-stretch"
          >
            <div id="main-middle-sidebar" class="vertical-stretch">
              <MainSidebar id="main-middle-sidebar-content" class="vertical-stretch" />
            </div>
          </div>
          <div class="column vertical-stretch">
            <div id="main-middle-view" class="vertical-stretch">
              <main id="main-middle-view-content" class="vertical-stretch">
                <slot />
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MainFooter />
  </div>
</template>

<script setup>
import MainNavbar from './MainNavbar.vue';
import MainSidebar from './MainSidebar.vue';
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

    #main-middle-view {
      background-color: $main-view-background-color;
    }
  }

  footer {
    flex-basis: content;
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
