<template>
  <svg viewBox="0 0 24 24" width="20" height="20">
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      fill="none"
      stroke-width="1.5"
    />
    <line
      x1="12"
      y1="12"
      x2="12"
      y2="7"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      :style="{
        transform: `rotate(${hourDeg}deg)`,
        transformOrigin: '12px 12px',
      }"
    />
    <line
      x1="12"
      y1="12"
      x2="12"
      y2="5"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      :style="{
        transform: `rotate(${minuteDeg}deg)`,
        transformOrigin: '12px 12px',
      }"
    />
  </svg>
</template>

<script setup lang="ts">
const { now } = useLocalTime("Asia/Ho_Chi_Minh");

const hourDeg = computed(() => {
  const h = now.value.getHours() % 12;
  const m = now.value.getMinutes();
  return h * 30 + m * 0.5; // 360/12 per hour + drift within the hour
});
const minuteDeg = computed(() => now.value.getMinutes() * 6); // 360/60 per minute
</script>

<style scoped></style>
