<template>
  <div id="page-loading-overlay">
    <i class="fas fa-spinner fa-spin spin-icon" />
  </div>
</template>

<style lang="scss">
@use 'sass:color';
@import '../../css/bulma-custom.scss';

#page-loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: color.change($dark, $alpha: 0.9);
  z-index: -9999;
  display: flex;
  font-size: 6rem;
  color: $white;

  justify-content: center;
  align-items: center;

  opacity: 0;
  transition: opacity 200ms ease-in-out;
}

body.page-is-transitioning {
  #page-loading-overlay {
    opacity: 1;
    z-index: 9999;
  }
}
</style>
