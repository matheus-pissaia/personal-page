import { onMounted, onUnmounted, ref } from 'vue'

function getCurrentTimeString() {
    return new Date().toLocaleTimeString('pt-BR')
}

export function useTime() {
    let intervalId: number | null = null

    const currentTime = ref(getCurrentTimeString())

    function startTime() {
        intervalId = setInterval(
            () => currentTime.value = getCurrentTimeString(),
            1000
        )
    }

    onMounted(startTime)
    onUnmounted(() => intervalId && clearInterval(intervalId))

    return { currentTime }
}
