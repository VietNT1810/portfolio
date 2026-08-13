<template>
  <button
    :type="buttonType"
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
  buttonType?: "button" | "submit" | "reset";
  type?: "is-primary" | "is-outlined";
  disabled?: boolean;
  loading?: boolean;
}

withDefaults(defineProps<ButtonProps>(), {
  buttonType: "button",
  type: "is-primary",
  disabled: false,
  loading: false,
});
</script>
