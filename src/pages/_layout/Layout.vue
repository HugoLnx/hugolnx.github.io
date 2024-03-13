<template>
  <MainNavbar />
  <div id="main-body">
    <div id="main-middle" class="lnx-container">
      <div id="main-middle-view">
        <main id="main-middle-view-content">
          <slot />
        </main>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script setup>
import MainNavbar from './MainNavbar.vue';
import MainFooter from './MainFooter.vue';
import '../../css/index.scss';
</script>

<style lang="scss">
@import '../../css/bulma-custom.scss';

#main-body {
  margin-top: 8rem;
  display: flex;
  flex-flow: column nowrap;
}

#main-middle-view-content {
  padding: 0.5rem;
}

.lnx-container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
}

#main-middle-view {
  background-color: $main-sidebar-background-color;

  @include tablet {
    padding: 0 1rem;
    margin: 0 1rem;
  }
}

// Section Layout
.page-section {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.title.page-section-title {
  font-size: $size-2;
  font-weight: 700;
  color: $color-title1;
  text-align: center;
  align-self: center;
  width: 90%;

  margin-top: 3rem;
  margin-bottom: 1rem;
  border-bottom: 3px solid $color-title1;
  padding-bottom: 0.5rem;
}

.title.page-section-subtitle {
  font-size: $size-4;
  text-align: center;
  align-self: center;

  width: 65%;
  min-width: 250px;

  margin-top: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.5rem;
}
</style>
