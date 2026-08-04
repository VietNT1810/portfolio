export function useLocalTime(timeZone?: string) {
  const now = ref(new Date())

  let timer: ReturnType<typeof setInterval>
  onMounted(() => {
    timer = setInterval(() => { now.value = new Date() }, 1000)
  })
  onUnmounted(() => clearInterval(timer))

  const formatted = computed(() =>
    new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone, // e.g. "Asia/Ho_Chi_Minh"
    }).format(now.value)
  )

  return { now, formatted }
}