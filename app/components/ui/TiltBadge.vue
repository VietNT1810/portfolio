<template>
  <div style="perspective: 800px">
    <div
      ref="containerRef"
      data-slot="tilt-badge"
      v-bind="$attrs"
      class="relative cursor-pointer transform-3d will-change-transform"
      :style="containerStyle"
      @mouseenter="onMouseEnter"
      @mousemove="onMouseMove"
      @mouseleave="onMouseLeave"
      @touchend="onTouchEnd"
    >
      <div
        data-slot="tilt-badge-image"
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url(${imageUrl})` }"
      />
      <div
        data-slot="tilt-badge-highlight"
        class="pointer-events-none absolute inset-0 mix-blend-hard-light"
        :style="highlightStyle"
      />
      <div
        data-slot="tilt-badge-shadow"
        class="pointer-events-none absolute inset-0"
        :style="shadowStyle"
      />
      <div
        data-slot="tilt-badge-content"
        class="absolute inset-0 flex items-center justify-center"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  imageUrl: string;
  size?: number;
  width?: number;
  height?: number;
  borderRadius?: number;
  maxTilt?: number;
  scale?: number;
  shadowRadius?: number;
  disableTiltOnMobile?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: 96,
  width: undefined,
  height: undefined,
  borderRadius: 0,
  maxTilt: 15,
  scale: 1.1,
  shadowRadius: 128,
  disableTiltOnMobile: true,
});

defineOptions({ inheritAttrs: false });

const containerRef = ref<HTMLElement | null>(null);

const isHovering = ref(false);
const rotateX = ref(0);
const rotateY = ref(0);
const highlightOpacity = ref(0);
const shadowOpacity = ref(0);
const highlightBand = ref(40);
const shadowX = ref(0);
const shadowY = ref(0);

let rect: DOMRect | null = null;
let lastTouchTime = 0;

const resolvedWidth = computed(() => props.width ?? props.size);
const resolvedHeight = computed(() => props.height ?? props.size);

const isCoarsePointer = useMediaQuery("(pointer: coarse)");
const tiltEnabled = computed(
  () => !(props.disableTiltOnMobile && isCoarsePointer.value)
);

function onTouchEnd(e: TouchEvent) {
  lastTouchTime = e.timeStamp;
}

function onMouseEnter(e: MouseEvent) {
  if (!tiltEnabled.value) return;
  if (e.timeStamp - lastTouchTime < 100) return;
  rect = containerRef.value!.getBoundingClientRect();
  isHovering.value = true;
}

function onMouseMove(e: MouseEvent) {
  if (!tiltEnabled.value) return;
  if (e.timeStamp - lastTouchTime < 100) return;
  if (!rect) rect = containerRef.value!.getBoundingClientRect();

  const { maxTilt } = props;
  const nx = (e.clientX - rect.left) / rect.width - 0.5;
  const ny = (e.clientY - rect.top) / rect.height - 0.5;

  rotateY.value = nx * 2 * -maxTilt;
  rotateX.value = ny * 2 * maxTilt;

  const f = rotateX.value;
  highlightOpacity.value = Math.max(
    0,
    Math.min(1, (Math.sign(f) * f * f) / 100)
  );
  shadowOpacity.value = Math.max(0, Math.min(1, (-Math.sign(f) * f * f) / 100));
  highlightBand.value = Math.max(40, 10 + f * 4);

  shadowX.value = e.clientX - rect.left;
  shadowY.value = e.clientY - rect.top;
}

function onMouseLeave(e: MouseEvent) {
  if (!tiltEnabled.value) return;
  if (e.timeStamp - lastTouchTime < 100) return;
  isHovering.value = false;
  rotateX.value = 0;
  rotateY.value = 0;
  highlightOpacity.value = 0;
  shadowOpacity.value = 0;
}

const containerStyle = computed(() => ({
  width: `${resolvedWidth.value}px`,
  height: `${resolvedHeight.value}px`,
  borderRadius: `${props.borderRadius}px`,
  overflow: props.borderRadius > 0 ? "hidden" : undefined,
  transform: tiltEnabled.value
    ? `scale(${isHovering.value ? props.scale : 1}) rotateX(${
        rotateX.value
      }deg) rotateY(${rotateY.value}deg)`
    : "none",
  transition: isHovering.value
    ? "transform 0.05s linear"
    : "transform 0.25s ease-out",
}));

const maskStyle = computed(() => ({
  maskImage: `url(${props.imageUrl})`,
  WebkitMaskImage: `url(${props.imageUrl})`,
  maskSize: "cover",
  WebkitMaskSize: "cover",
}));

const highlightStyle = computed(() => ({
  ...maskStyle.value,
  opacity: highlightOpacity.value,
  background: `linear-gradient(210deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.5) ${
    highlightBand.value / 2
  }%, rgba(255,255,255,0) ${highlightBand.value}%, rgba(0,0,0,0) ${
    highlightBand.value
  }%)`,
  transition: isHovering.value ? "none" : "opacity 0.4s ease-out",
}));

const shadowStyle = computed(() => ({
  ...maskStyle.value,
  opacity: shadowOpacity.value,
  background: `radial-gradient(${props.shadowRadius}px ${props.shadowRadius}px at ${shadowX.value}px ${shadowY.value}px, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)`,
  transition: isHovering.value ? "none" : "opacity 0.4s ease-out",
}));
</script>

<style scoped></style>
