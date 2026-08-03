<template>
  <header class="main-header" data-box-decoration="bottom">
    <div class="main-header-container">
      <div class="main-header-logo">
        <nuxt-link to="/">
          <Logo class="h-8" />
        </nuxt-link>
      </div>
      <nav class="main-header-nav">
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
        <ui-separator orientation="vertical" class="mx-2" />
        <ui-tooltip text="Toggle mode" placement="bottom">
          <ui-theme-toggle />
        </ui-tooltip>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Logo from "~/assets/images/tuanviet-logo.svg";
</script>

<style scoped></style>
