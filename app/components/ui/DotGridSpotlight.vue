<template>
  <canvas
    ref="canvasRef"
    data-ready="false"
    :class="[
      'pointer-events-none fixed inset-0 block opacity-0 transition-opacity duration-500 data-[ready=true]:opacity-100',
      props.class,
    ]"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watchEffect } from "vue";

export interface DotGridSpotlightProps {
  dotColor?: string;
  activeDotColor?: string;
  spacing?: number;
  baseRadius?: number;
  activeRadius?: number;
  interactionRadius?: number; // The radius (in pixels) of the spotlight around the cursor.
  activeMaxAlpha?: number; // The maximum opacity at the exact center of the spotlight (0–1).
  activeMinAlpha?: number; // The minimum opacity at the outer edge of the spotlight (0–1)..
  class?: string;
}

const props = withDefaults(defineProps<DotGridSpotlightProps>(), {
  dotColor: "rgba(255, 255, 255, 0.05)",
  activeDotColor: "rgba(255, 255, 255, 0.1)",
  spacing: 10,
  baseRadius: 1,
  activeRadius: 2,
  interactionRadius: 128,
  activeMaxAlpha: 1.0,
  activeMinAlpha: 0.5,
});

const canvasRef = ref<HTMLCanvasElement | null>(null);
const mouse = { x: -1000, y: -1000, isActive: false };

let width = 0;
let height = 0;
let renderFrameId: number | null = null;

function draw(ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, width, height);

  const offsetX = (width % props.spacing) / 2;
  const offsetY = (height % props.spacing) / 2;

  for (let x = offsetX; x <= width; x += props.spacing) {
    for (let y = offsetY; y <= height; y += props.spacing) {
      const dx = x - mouse.x;
      const dy = y - mouse.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      let currentRadius = props.baseRadius;
      let currentColor = props.dotColor;
      let currentAlpha = 1.0;

      if (mouse.isActive && distance < props.interactionRadius) {
        const factor = 1 - distance / props.interactionRadius;
        currentRadius =
          props.baseRadius + (props.activeRadius - props.baseRadius) * factor;
        currentColor = props.activeDotColor;
        currentAlpha =
          props.activeMinAlpha +
          (props.activeMaxAlpha - props.activeMinAlpha) * factor;
      }

      ctx.globalAlpha = currentAlpha;
      ctx.beginPath();
      ctx.arc(x, y, currentRadius, 0, Math.PI * 2);
      ctx.fillStyle = currentColor;
      ctx.fill();
    }
  }

  ctx.globalAlpha = 1.0;
}

function resizeCanvas(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
) {
  const dpr = window.devicePixelRatio || 1;
  width = window.innerWidth;
  height = window.innerHeight;

  if (width === 0 || height === 0) return;

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.scale(dpr, dpr);

  draw(ctx);

  requestAnimationFrame(() => {
    canvas.dataset.ready = "true";
  });
}

function scheduleRender(ctx: CanvasRenderingContext2D) {
  if (renderFrameId === null) {
    renderFrameId = requestAnimationFrame(() => {
      draw(ctx);
      renderFrameId = null;
    });
  }
}

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const onMouseMove = (e: MouseEvent) => {
    // clientX/Y maps directly to fixed canvas coords (top: 0, left: 0)
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.isActive = true;
    scheduleRender(ctx);
  };

  const onMouseLeave = () => {
    mouse.isActive = false;
    scheduleRender(ctx);
  };

  const onResize = () => resizeCanvas(canvas, ctx);

  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mouseleave", onMouseLeave);
  window.addEventListener("resize", onResize);

  resizeCanvas(canvas, ctx);

  // Re-draw when props change
  watchEffect(() => {
    void props.dotColor;
    void props.activeDotColor;
    void props.spacing;
    void props.baseRadius;
    void props.activeRadius;
    void props.interactionRadius;
    void props.activeMaxAlpha;
    void props.activeMinAlpha;
    resizeCanvas(canvas, ctx);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseleave", onMouseLeave);
    window.removeEventListener("resize", onResize);
    if (renderFrameId !== null) cancelAnimationFrame(renderFrameId);
  });
});
</script>

<style scoped></style>
