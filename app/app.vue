<template>
  <div
    class="mx-auto w-full max-w-300 border-x border-b border-border bg-foreground"
  >
    <Teleport to="body">
      <UiDotGridSpotlight
        :spacing="16"
        :interaction-radius="160"
        :dotColor="isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'"
        :activeDotColor="isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'"
        class="fixed! z-[-1]"
      />
    </Teleport>
    <Header />
    <NuxtPage />
    <Footer />
    <UiScrollTop />
  </div>
</template>
<script setup lang="ts">
const isDark = useDark();
</script>
