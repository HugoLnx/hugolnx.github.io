<template>
  <div id="page-loading-overlay">
    <i class="fas fa-spinner fa-spin spin-icon" />
  </div>
</template>

<style lang="scss">
@use 'sass:color';
@import '../../css/bulma-custom.scss';

body.page-is-transitioning {
  #page-loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: color.change($dark, $alpha: 0.9);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 6rem;
    color: $white;
  }
}
</style>
