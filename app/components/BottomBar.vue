<template>
  <div class="bottom-bar">
    <effect-progressive-blur v-if="isMobile" :distance="64" :strength="24" />
    <UiScrollTop />
    <ui-dropdown v-if="isMobile" position="top-left">
      <template #trigger="{ isOpen }">
        <button class="nav-menu__trigger">
          <icon-hamburger />
        </button>
      </template>

      <div class="nav-menu__dropdown">
        <a class="nav-menu__item" @click="scrollToSection('about')">About</a>
        <a class="nav-menu__item" @click="scrollToSection('stack')">Skills</a>
        <a class="nav-menu__item" @click="scrollToSection('experience')">
          Experience
        </a>
        <a class="nav-menu__item" @click="scrollToSection('projects')">
          Projects
        </a>
        <a class="nav-menu__item" @click="scrollToSection('contact')">
          Contact
        </a>
      </div>
    </ui-dropdown>
  </div>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smaller("md");

const { scrollToSection } = useScrollTo()
</script>

<style scoped></style>
