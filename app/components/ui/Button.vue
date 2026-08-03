<template>
  <button
    class="button"
    :class="[type, disabled ? 'is-disabled' : '', loading ? 'is-loading' : '']"
    :disabled="disabled"
  >
    <span>
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
interface ButtonProps {
  type?: "is-primary" | "is-outlined";
  disabled?: boolean;
  loading?: boolean;
}

withDefaults(defineProps<ButtonProps>(), {
  type: "is-primary",
  disabled: false,
  loading: false,
});
</script>
