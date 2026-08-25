<template>
  <button
    class="scroll-top-btn"
    :class="isScrollingUp ? 'is-scrolling-up' : 'is-scrolling-down'"
    @click="scrollToTop"
    aria-label="Scroll to top"
  >
    <icon-arrow-up />
  </button>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const isScrollingUp = ref(false);
let previousScrollY = 0;

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY <= 0) {
    isScrollingUp.value = false;
    previousScrollY = 0;
    return;
  }

  isScrollingUp.value = currentScrollY < previousScrollY;
  previousScrollY = currentScrollY;
};

const { scrollToTop } = useScrollTo();

onMounted(() => {
  previousScrollY = window.scrollY;
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
