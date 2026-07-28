<template>
  <button
    type="button"
    class="theme-toggle"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggleDark()"
  >
    <ClientOnly>
      <icon-sun v-if="isDark" class="theme-toggle__icon" />
      <icon-moon v-else class="theme-toggle__icon" />
    </ClientOnly>
  </button>
</template>

<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style scoped></style>
