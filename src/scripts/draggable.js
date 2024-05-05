const body = document.getElementsByTagName('body')[0]

let activeElement = null
let offsetX, offsetY;

function dragStart(e) {
    activeElement = e.target.parentNode

    offsetX = e.clientX - activeElement.offsetLeft
    offsetY = e.clientY - activeElement.offsetTop

    body.addEventListener('mousemove', drag)
    body.addEventListener('mouseup', dragEnd)

    e.preventDefault()
}

function dragEnd() {
    body.removeEventListener('mousemove', drag)
    body.removeEventListener('mouseup', dragEnd)

    activeElement = null
}

function drag(event) {
    if (!activeElement)
        return

    activeElement.style.left = `${event.clientX - offsetX}px`
    activeElement.style.top = `${event.clientY - offsetY}px`
}
