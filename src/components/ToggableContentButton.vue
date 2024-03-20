<template>
  <a
    href="#"
    class="toggle-button"
    @click.prevent
  >
    <span
      v-if="!hideIcon"
      class="icon"
    >
      <i class="toggle-icon fa-solid fa-chevron-down" />
    </span>
    <span class="toggle-label-wrapper">
      <span class="toggle-off-label">{{ showLabel }}</span>
      <span class="toggle-on-label">{{ hideLabel }}</span>
    </span>
  </a>
</template>

<script setup>
defineProps({
    showLabel: { type: String, required: false, default: 'Show Details' },
    hideLabel: { type: String, required: false, default: 'Hide Details' },
    hideIcon: { type: Boolean, required: false, default: false },
});
</script>

<style lang="scss">
@use 'sass:color';
@import '../css/bulma-custom.scss';

$anim-duration: 500ms;
$anim-ease: ease-out;
// Toggle Button Styling
.toggle-button {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  border-radius: $radius-rounded;
  padding: 0.33rem 1rem;
  font-size: $size-7;

  background-color: rgba(0, 0, 0, 0);
  color: $link;
  border: solid 1px $link;
}

// Toggle Icon Styling
.toggle-button {
  .toggle-icon {
    transition: transform $anim-duration $anim-ease;
    transition-property: transform;
  }

  transition: margin $anim-duration $anim-ease;
  &.is-content-on {
    margin-top: 1rem;
    .toggle-icon {
      transform: rotate(180deg);
    }
  }
}

// Hover
.is-mouse .toggle-button:hover {
  cursor: pointer;
  background-color: color.change($link, $alpha: 0.2);
}

// Toggle Text Styling
.toggle-label-wrapper {
  .toggle-on-label {
    display: none;
    opacity: 0;
  }

  .toggle-off-label {
    display: inline-block;
    opacity: 1;
  }

  .toggle-on-label, .toggle-off-label {
    transition: opacity $anim-duration $anim-ease;
  }
}

.toggle-button {
  &.is-content-on {
    .toggle-label-wrapper {
      position: relative;

      .toggle-on-label {
        display: inline-block;
        opacity: 1;
      }

      .toggle-off-label {
        display: none;
        opacity: 0;
      }
    }
  }
}
</style>
