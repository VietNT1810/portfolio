<template>
  <header class="main-header" data-box-decoration="bottom">
    <div class="main-header-container">
      <div class="main-header-logo">
        <nuxt-link to="/">
          <Logo class="h-8" />
        </nuxt-link>
      </div>
      <nav class="main-header-nav">
        <ui-dropdown
          position="bottom-left"
          :chevron="true"
          trigger-class="main-header-nav__item"
        >
          <template #trigger="{ isOpen }">
            <button>About</button>
          </template>

          <div class="header-dropdown">
            <button @click="navigateToTab('overview')">Overview</button>
            <button @click="navigateToTab('education')">Education</button>
            <button @click="navigateToTab('certifications')">
              Certifications
            </button>
          </div>
        </ui-dropdown>
        <button class="main-header-nav__item" @click="scrollToSection('stack')">
          Skills
        </button>
        <button
          class="main-header-nav__item"
          @click="scrollToSection('experience')"
        >
          Experience
        </button>
        <button
          class="main-header-nav__item"
          @click="scrollToSection('projects')"
        >
          Projects
        </button>
        <button
          class="main-header-nav__item"
          @click="scrollToSection('contact')"
        >
          Contact
        </button>
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

const currentAboutTab = useState("aboutTab", () => "overview");

const { scrollToSection } = useScrollTo()

function navigateToTab(tab: string) {
  currentAboutTab.value = tab;
  scrollToSection("about");
}
</script>

<style scoped></style>
