<template>
  <!-- Overlay -->
  <Teleport to="body">
    <Transition name="dropdown-overlay">
      <div
        v-if="overlay && isOpen && trigger === 'click'"
        class="dropdown-overlay"
        @click="close"
      />
    </Transition>
  </Teleport>

  <!-- Trigger -->
  <div
    ref="referenceRef"
    class="dropdown-trigger"
    :class="triggerClass"
    v-bind="triggerListeners"
  >
    <slot name="trigger" :is-open="isOpen" />
    <icon-chevron-down
      v-if="chevron"
      class="dropdown-trigger__chevron"
      :class="{ 'is-open': isOpen }"
    />
  </div>

  <!-- Floating panel -->
  <Teleport to="body">
    <Transition name="dropdown">
      <div
        v-if="isOpen"
        ref="floatingRef"
        class="dropdown-panel"
        v-bind="panelListeners"
        @click="onPanelClick"
      >
        <slot :close="close" />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  watchEffect,
  nextTick,
  onMounted,
  onBeforeUnmount,
} from "vue";
import {
  autoUpdate,
  computePosition,
  offset,
  flip,
  shift,
} from "@floating-ui/vue";
import type { Placement } from "@floating-ui/vue";

type DropdownPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"
  | "left-top"
  | "left-center"
  | "left-bottom"
  | "right-top"
  | "right-center"
  | "right-bottom";

interface DropdownProps {
  position?: DropdownPosition;
  trigger?: "click" | "hover";
  overlay?: boolean;
  closeOnClick?: boolean;
  gap?: number;
  disabled?: boolean;
  chevron?: boolean;
  triggerClass?: string;
}

const props = withDefaults(defineProps<DropdownProps>(), {
  position: "bottom-left",
  trigger: "click",
  overlay: false,
  closeOnClick: true,
  gap: 6,
  disabled: false,
  chevron: false,
});

const emit = defineEmits<{
  open: [];
  close: [];
}>();

const referenceRef = ref<HTMLElement | null>(null);
const floatingRef = ref<HTMLElement | null>(null);
const isOpen = ref(false);
let hoverTimeout: ReturnType<typeof setTimeout> | null = null;
let stopAutoUpdate: (() => void) | null = null;

const placementMap: Record<DropdownPosition, Placement> = {
  "top-left": "top-start",
  "top-center": "top",
  "top-right": "top-end",
  "bottom-left": "bottom-start",
  "bottom-center": "bottom",
  "bottom-right": "bottom-end",
  "left-top": "left-start",
  "left-center": "left",
  "left-bottom": "left-end",
  "right-top": "right-start",
  "right-center": "right",
  "right-bottom": "right-end",
};

const placement = computed(() => placementMap[props.position]);

const triggerListeners = computed(() => {
  if (props.trigger === "click") {
    return { onClick: toggle };
  }
  return {
    onMouseenter: () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
      open();
    },
    onMouseleave: () => {
      hoverTimeout = setTimeout(close, 120);
    },
  };
});

const panelListeners = computed(() => {
  if (props.trigger !== "hover") return {};
  return {
    onMouseenter: () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
    },
    onMouseleave: () => {
      hoverTimeout = setTimeout(close, 120);
    },
  };
});

watchEffect(async (onCleanup) => {
  stopAutoUpdate?.();
  stopAutoUpdate = null;

  if (!isOpen.value) return;
  await nextTick();

  const refEl = referenceRef.value;
  const floatEl = floatingRef.value;
  if (!refEl || !floatEl) return;

  stopAutoUpdate = autoUpdate(refEl, floatEl, async () => {
    const { x, y } = await computePosition(refEl, floatEl, {
      placement: placement.value,
      strategy: "fixed",
      middleware: [offset(props.gap), flip(), shift({ padding: 8 })],
    });
    Object.assign(floatEl.style, {
      left: `${x}px`,
      top: `${y}px`,
    });
  });

  onCleanup(() => {
    stopAutoUpdate?.();
    stopAutoUpdate = null;
  });
});

function open() {
  if (props.disabled) return;
  isOpen.value = true;
  emit("open");
}

function close() {
  isOpen.value = false;
  emit("close");
}

function toggle() {
  isOpen.value ? close() : open();
}

function onPanelClick() {
  if (props.closeOnClick) close();
}

function onDocumentClick(event: MouseEvent) {
  if (props.overlay || props.trigger === "hover") return;
  const target = event.target as Node;
  if (
    !referenceRef.value?.contains(target) &&
    !floatingRef.value?.contains(target)
  ) {
    close();
  }
}

onMounted(() => document.addEventListener("click", onDocumentClick, true));
onBeforeUnmount(() => {
  document.removeEventListener("click", onDocumentClick, true);
  stopAutoUpdate?.();
});
</script>
