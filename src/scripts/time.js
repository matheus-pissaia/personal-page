const timeElement = document.getElementById('time')

function updateTime() {
    if (!timeElement)
        return

    const now = new Date()

    timeElement.textContent = now.toLocaleTimeString()
}

setInterval(updateTime, 1_000)
