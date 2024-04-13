const draggableElement = document.getElementById('window')
const draggableArea = document.getElementById('window-top-bar')

let active = false
let currentX
let currentY
let initialX
let initialY
let xOffset = 0
let yOffset = 0

draggableArea.addEventListener('mousedown', dragStart)
document.addEventListener('mouseup', dragEnd)
document.addEventListener('mousemove', drag)

function dragStart(e) {
    initialX = e.clientX - xOffset
    initialY = e.clientY - yOffset
    if (e.target === draggableArea) {
        active = true
    }
}

function dragEnd(e) {
    initialX = currentX
    initialY = currentY
    active = false
}

function drag(e) {
    if (active) {
        e.preventDefault()

        currentX = e.clientX - initialX
        currentY = e.clientY - initialY

        xOffset = currentX
        yOffset = currentY

        setTranslate(currentX, currentY, draggableElement)
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)"
}
