<template>
  <MainNavbar />
  <div id="main-body">
    <div id="main-middle">
      <div id="main-middle-view" class="background-container">
        <main id="main-middle-view-content">
          <slot />
        </main>
      </div>
    </div>
  </div>
  <MainFooter />
  <IsTouchClassifier />
  <PageLoadingOverlay />
</template>

<script setup>
import MainNavbar from './MainNavbar.vue';
import MainFooter from './MainFooter.vue';
import IsTouchClassifier from './IsTouchClassifier.vue';
import PageLoadingOverlay from './PageLoadingOverlay.vue';
import '../../css/index.scss';
</script>

<style lang="scss">
@import '../../css/bulma-custom.scss';

#main-body {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

#main-body, #main-middle, #main-middle-view, #main-middle-view-content {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  align-self: center;
}

#main-body, #main-middle, #main-middle-view-content {
  width: 100%;
}

#main-middle-view-content {
  padding: 0.5rem;
  padding-bottom: 3rem;
  padding-top: 8rem;
}

.background-container {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  align-self: center;

  width: 100%;
  @include desktop-only {
    width: 960px;
  }

  @include widescreen {
    width: 1152px;
  }

  @include fullhd {
    width: 1344px;
  }
}

.content-container {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  align-self: center;

  // width: 100%;
  @include tablet-only {
    max-width: 600px;
  }

  @include desktop-only {
    max-width: 860px;
  }

  @include widescreen {
    max-width: 1024px;
  }
}

#main-middle-view {
  background-color: $main-sidebar-background-color;
}

// Section Layout
.page-section {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.page-section .title.page-section-title {
  font-size: $size-2;
  font-weight: 700;
  color: $color-title1;
  text-align: center;
  align-self: center;
  width: 90%;
  max-width: 450px;

  margin-top: 1rem;
  margin-bottom: 3rem;
  border-bottom: 3px solid $color-title1;
  padding-bottom: 0.5rem;
}

.title.page-section-subtitle {
  font-size: $size-4;
  text-align: center;
  align-self: center;

  width: 65%;
  min-width: 250px;
  max-width: 380px;

  margin-top: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.5rem;
}
</style>
