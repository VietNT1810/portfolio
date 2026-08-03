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

<style scoped>
.tooltip-trigger {
  display: inline-block;
}

.tooltip-box {
  position: absolute;
  z-index: 9999;
  padding: 6px 10px;
  font-size: 13px;
  line-height: 1.4;
  color: #111111;
  background: #fafafa;
  border-radius: 6px;
  white-space: nowrap;
  pointer-events: auto;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.15);
}

.tooltip-box::after {
  content: "";
  position: absolute;
  width: 6px;
  height: 6px;
  background: #fafafa;
  transform: rotate(45deg);
}

.tooltip-top::after {
  bottom: -3px;
  left: 50%;
  margin-left: -3px;
}

.tooltip-bottom::after {
  top: -3px;
  left: 50%;
  margin-left: -3px;
}

.tooltip-left::after {
  right: -3px;
  top: 50%;
  margin-top: -3px;
}

.tooltip-right::after {
  left: -3px;
  top: 50%;
  margin-top: -3px;
}

.tooltip-fade-enter-active,
.tooltip-fade-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.tooltip-fade-enter-from,
.tooltip-fade-leave-to {
  opacity: 0;
  transform: translateY(2px);
}
</style>
