function animate() {
    const animateId = window.requestAnimationFrame(animate)
    sprites.map.draw()
}

animate()