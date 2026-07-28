<template>
  <header class="main-header">
    <div class="main-header-container">
      <div class="main-header-logo">
        <NuxtLink to="/">
          <Logo class="h-8" />
        </NuxtLink>
      </div>
      <nav class="main-header-nav">
        <a class="main-header-nav__item" href="">Home</a>
        <a class="main-header-nav__item" href="">About</a>
        <a class="main-header-nav__item" href="">Skills</a>
        <a class="main-header-nav__item" href="">Projects</a>
        <a class="main-header-nav__item" href="">Experience</a>
        <a class="main-header-nav__item" href="">Contact</a>
      </nav>
      <div class="main-header-actions">
        <div class="main-header-socials">
          <div class="main-header-social">
            <icon-github class="w-6 h-6 icon-fill-current" />
          </div>
          <div class="main-header-social">
            <icon-linkedin class="w-6 h-6 icon-fill-current" />
          </div>
        </div>
        <tooltip text="Toggle mode" placement="bottom">
          <theme-toggle />
        </tooltip>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Logo from "~/assets/images/tuanviet-logo.svg";
import Tooltip from "./ui/Tooltip.vue";
import ThemeToggle from "./ui/ThemeToggle.vue";
</script>

<style scoped></style>
