<!-- Place this inside the element you want the effect on -->
<template>
  <div
    class="progressive-blur"
    :class="`from-${fromPosition}`"
    :style="{
      '--distance': `${distance}px`,
      '--blur-strength': `${strength}px`,
    }"
  >
    <div v-for="i in Array(7)"></div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    distance?: number; // height or width of the blur effect
    strength?: number; // how strong the blur is
    zIndex?: number; // change to a positive value, if the blur is not visible
    fromPosition?: "top" | "bottom" | "left" | "right";
  }>(),
  {
    distance: 60,
    strength: 24,
    zIndex: -1,
    fromPosition: "bottom",
  }
);
</script>

<style scoped>
.progressive-blur {
  z-index: -1;

  position: absolute;
  pointer-events: none;

  top: auto;
  bottom: 0;
  left: 0;
  right: 0;

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &.from-bottom {
    height: var(--distance);

    & > div:nth-child(1) {
      z-index: 7;
      backdrop-filter: blur(calc(var(--blur-strength) / 64));
      mask: linear-gradient(
        to top,
        rgba(0, 0, 0, 1) 95%,
        rgba(0, 0, 0, 0) 100%
      );
    }
    & > div:nth-child(2) {
      z-index: 6;
      backdrop-filter: blur(calc(var(--blur-strength) / 32));
      mask: linear-gradient(to top, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 95%);
    }
    & > div:nth-child(3) {
      z-index: 5;
      backdrop-filter: blur(calc(var(--blur-strength) / 16));
      mask: linear-gradient(
        to top,
        rgba(0, 0, 0, 1) 80%,
        rgba(0, 0, 0, 0) 100%
      );
    }
    & > div:nth-child(4) {
      z-index: 4;
      backdrop-filter: blur(calc(var(--blur-strength) / 8));
      mask: linear-gradient(to top, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 80%);
    }
    & > div:nth-child(5) {
      z-index: 3;
      backdrop-filter: blur(calc(var(--blur-strength) / 4));
      mask: linear-gradient(to top, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 60%);
    }
    & > div:nth-child(6) {
      z-index: 2;
      backdrop-filter: blur(calc(var(--blur-strength) / 2));
      mask: linear-gradient(to top, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 40%);
    }
    & > div:nth-child(7) {
      z-index: 1;
      backdrop-filter: blur(calc(var(--blur-strength) / 1));
      mask: linear-gradient(to top, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 20%);
    }
  }

  &.from-top {
    height: var(--distance);

    & > div:nth-child(1) {
      z-index: 7;
      backdrop-filter: blur(calc(var(--blur-strength) / 64));
      mask: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1) 95%,
        rgba(0, 0, 0, 0) 100%
      );
    }
    & > div:nth-child(2) {
      z-index: 6;
      backdrop-filter: blur(calc(var(--blur-strength) / 32));
      mask: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1) 90%,
        rgba(0, 0, 0, 0) 95%
      );
    }
    & > div:nth-child(3) {
      z-index: 5;
      backdrop-filter: blur(calc(var(--blur-strength) / 16));
      mask: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1) 80%,
        rgba(0, 0, 0, 0) 100%
      );
    }
    & > div:nth-child(4) {
      z-index: 4;
      backdrop-filter: blur(calc(var(--blur-strength) / 8));
      mask: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1) 60%,
        rgba(0, 0, 0, 0) 80%
      );
    }
    & > div:nth-child(5) {
      z-index: 3;
      backdrop-filter: blur(calc(var(--blur-strength) / 4));
      mask: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1) 40%,
        rgba(0, 0, 0, 0) 60%
      );
    }
    & > div:nth-child(6) {
      z-index: 2;
      backdrop-filter: blur(calc(var(--blur-strength) / 2));
      mask: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1) 20%,
        rgba(0, 0, 0, 0) 40%
      );
    }
    & > div:nth-child(7) {
      z-index: 1;
      backdrop-filter: blur(calc(var(--blur-strength) / 1));
      mask: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1) 10%,
        rgba(0, 0, 0, 0) 20%
      );
    }
  }

  &.from-left {
    width: var(--distance);

    & > div:nth-child(1) {
      z-index: 7;
      backdrop-filter: blur(calc(var(--blur-strength) / 64));
      mask: linear-gradient(
        to right,
        rgba(0, 0, 0, 1) 95%,
        rgba(0, 0, 0, 0) 100%
      );
    }
    & > div:nth-child(2) {
      z-index: 6;
      backdrop-filter: blur(calc(var(--blur-strength) / 32));
      mask: linear-gradient(
        to right,
        rgba(0, 0, 0, 1) 90%,
        rgba(0, 0, 0, 0) 95%
      );
    }
    & > div:nth-child(3) {
      z-index: 5;
      backdrop-filter: blur(calc(var(--blur-strength) / 16));
      mask: linear-gradient(
        to right,
        rgba(0, 0, 0, 1) 80%,
        rgba(0, 0, 0, 0) 100%
      );
    }
    & > div:nth-child(4) {
      z-index: 4;
      backdrop-filter: blur(calc(var(--blur-strength) / 8));
      mask: linear-gradient(
        to right,
        rgba(0, 0, 0, 1) 60%,
        rgba(0, 0, 0, 0) 80%
      );
    }
    & > div:nth-child(5) {
      z-index: 3;
      backdrop-filter: blur(calc(var(--blur-strength) / 4));
      mask: linear-gradient(
        to right,
        rgba(0, 0, 0, 1) 40%,
        rgba(0, 0, 0, 0) 60%
      );
    }
    & > div:nth-child(6) {
      z-index: 2;
      backdrop-filter: blur(calc(var(--blur-strength) / 2));
      mask: linear-gradient(
        to right,
        rgba(0, 0, 0, 1) 20%,
        rgba(0, 0, 0, 0) 40%
      );
    }
    & > div:nth-child(7) {
      z-index: 1;
      backdrop-filter: blur(calc(var(--blur-strength) / 1));
      mask: linear-gradient(
        to right,
        rgba(0, 0, 0, 1) 10%,
        rgba(0, 0, 0, 0) 20%
      );
    }
  }

  &.from-right {
    width: var(--distance);

    & > div:nth-child(1) {
      z-index: 7;
      backdrop-filter: blur(calc(var(--blur-strength) / 64));
      mask: linear-gradient(
        to left,
        rgba(0, 0, 0, 1) 95%,
        rgba(0, 0, 0, 0) 100%
      );
    }
    & > div:nth-child(2) {
      z-index: 6;
      backdrop-filter: blur(calc(var(--blur-strength) / 32));
      mask: linear-gradient(
        to left,
        rgba(0, 0, 0, 1) 90%,
        rgba(0, 0, 0, 0) 95%
      );
    }
    & > div:nth-child(3) {
      z-index: 5;
      backdrop-filter: blur(calc(var(--blur-strength) / 16));
      mask: linear-gradient(
        to left,
        rgba(0, 0, 0, 1) 80%,
        rgba(0, 0, 0, 0) 100%
      );
    }
    & > div:nth-child(4) {
      z-index: 4;
      backdrop-filter: blur(calc(var(--blur-strength) / 8));
      mask: linear-gradient(
        to left,
        rgba(0, 0, 0, 1) 60%,
        rgba(0, 0, 0, 0) 80%
      );
    }
    & > div:nth-child(5) {
      z-index: 3;
      backdrop-filter: blur(calc(var(--blur-strength) / 4));
      mask: linear-gradient(
        to left,
        rgba(0, 0, 0, 1) 40%,
        rgba(0, 0, 0, 0) 60%
      );
    }
    & > div:nth-child(6) {
      z-index: 2;
      backdrop-filter: blur(calc(var(--blur-strength) / 2));
      mask: linear-gradient(
        to left,
        rgba(0, 0, 0, 1) 20%,
        rgba(0, 0, 0, 0) 40%
      );
    }
    & > div:nth-child(7) {
      z-index: 1;
      backdrop-filter: blur(calc(var(--blur-strength) / 1));
      mask: linear-gradient(
        to left,
        rgba(0, 0, 0, 1) 10%,
        rgba(0, 0, 0, 0) 20%
      );
    }
  }
}
</style>
