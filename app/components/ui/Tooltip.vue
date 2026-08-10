<template>
  <span
    ref="triggerRef"
    class="tooltip-trigger"
    @mouseenter="show"
    @mouseleave="hide"
    @focusin="show"
    @focusout="hide"
  >
    <slot />

    <Teleport to="body">
      <Transition name="tooltip-fade">
        <div
          v-if="visible"
          ref="tooltipRef"
          class="tooltip-box"
          :class="`tooltip-${placement}`"
          :style="tooltipStyle"
          role="tooltip"
          @mouseenter="show"
          @mouseleave="hide"
        >
          <slot name="content">{{ text }}</slot>
        </div>
      </Transition>
    </Teleport>
  </span>
</template>

<script setup lang="ts">
import { ref, reactive, nextTick, type CSSProperties } from "vue";

type Placement = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  text?: string;
  placement?: Placement;
  offset?: number;
  delay?: number;
}

const props = withDefaults(defineProps<TooltipProps>(), {
  text: "",
  placement: "top",
  offset: 8,
  delay: 80,
});

const triggerRef = ref<HTMLElement | null>(null);
const tooltipRef = ref<HTMLElement | null>(null);
const visible = ref(false);

const tooltipStyle = reactive<CSSProperties>({
  top: "0px",
  left: "0px",
});

let showTimer: ReturnType<typeof setTimeout> | undefined;
let hideTimer: ReturnType<typeof setTimeout> | undefined;

function show(): void {
  clearTimeout(showTimer);
  clearTimeout(hideTimer);
  showTimer = setTimeout(async () => {
    visible.value = true;
    await nextTick();
    updatePosition();
  }, props.delay);
}

function hide(): void {
  clearTimeout(showTimer);
  clearTimeout(hideTimer);
  // small delay so moving pointer between trigger and tooltip doesn't close it
  hideTimer = setTimeout(() => {
    visible.value = false;
  }, 80);
}

interface Position {
  top: number;
  left: number;
}

function updatePosition(): void {
  if (!triggerRef.value || !tooltipRef.value) return;

  const trigger = triggerRef.value.getBoundingClientRect();
  const tooltip = tooltipRef.value.getBoundingClientRect();
  const { placement, offset } = props;

  const positions: Record<Placement, Position> = {
    top: {
      top: trigger.top - tooltip.height - offset,
      left: trigger.left + trigger.width / 2 - tooltip.width / 2,
    },
    bottom: {
      top: trigger.bottom + offset,
      left: trigger.left + trigger.width / 2 - tooltip.width / 2,
    },
    left: {
      top: trigger.top + trigger.height / 2 - tooltip.height / 2,
      left: trigger.left - tooltip.width - offset,
    },
    right: {
      top: trigger.top + trigger.height / 2 - tooltip.height / 2,
      left: trigger.right + offset,
    },
  };

  const pos = positions[placement] ?? positions.top;

  const clampedLeft = Math.min(
    Math.max(pos.left, 8),
    window.innerWidth - tooltip.width - 8
  );

  tooltipStyle.top = `${pos.top + window.scrollY}px`;
  tooltipStyle.left = `${clampedLeft}px`;
}
</script>
