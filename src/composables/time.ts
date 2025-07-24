import { onMounted, onUnmounted, ref } from 'vue'

export function useTime() {
    let intervalId: number | null = null

    const currentTime = ref(new Date().toLocaleTimeString())

    function startTime() {
        intervalId = setInterval(
            () => currentTime.value = new Date().toLocaleTimeString(),
            1000
        )
    }

    onMounted(startTime)
    onUnmounted(() => intervalId && clearInterval(intervalId))

    return { currentTime }
}
