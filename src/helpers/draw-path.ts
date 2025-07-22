export function drawPath(fromElement: HTMLElement, toElement: HTMLElement) {
    const svgEl = document.getElementById('svgEl')

    if (!svgEl)
        return

    const pathEl = svgEl.children[0]
    pathEl.classList.remove('animate-path')

    const fromElementX = fromElement.offsetLeft + fromElement.offsetWidth
    const fromElementY = fromElement.offsetTop + (fromElement.offsetHeight / 2)

    const toElementX = toElement.offsetLeft
    const toElementY = toElement.offsetTop + (toElement.offsetHeight / 2)
    const middleX = (fromElementX + toElementX) / 2

    pathEl.classList.add('animate-path')
    pathEl.setAttribute(
        'd',
        `M${fromElementX} ${fromElementY} L${middleX} ${fromElementY} L${middleX} ${toElementY}`
    )
}
