<template>
  <div
    :data-orientation="orientation"
    :role="decorative ? 'none' : 'separator'"
    :aria-orientation="decorative ? undefined : orientation"
    data-slot="separator"
    class="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"
    :class="$attrs.class"
  />
</template>

<script setup lang="ts">
interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
}

withDefaults(defineProps<SeparatorProps>(), {
  orientation: "horizontal",
  decorative: true,
});

defineOptions({
  inheritAttrs: false,
});
</script>
