<template>
  <button class="copy-btn shrink-0" @click="handleCopy(content)">
    <Transition name="icon-fade" mode="out-in">
      <icon-check v-if="copied" class="w-4 h-4" />
      <icon-copy v-else class="w-4 h-4" />
    </Transition>
  </button>
</template>

<script setup lang="ts">
interface CopyProps {
  content: string;
}

defineProps<CopyProps>();

// Copy to clipboard
const { copy, copied } = useClipboard({ copiedDuring: 1500 });

function handleCopy(text: string) {
  copy(text);
}
</script>

<style scoped></style>
