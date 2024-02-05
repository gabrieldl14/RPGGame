let move = false
function animate() {
    const animateId = window.requestAnimationFrame(animate)
    sprites.map.draw()
    sprites.player.draw()

    if (keys.w.pressed && lastKey === "w" && move == false) {
        movables.forEach((movable) => {
            movable.position.y += 64;
            move = true
        })
    } else if (keys.a.pressed && lastKey === "a" && move == false) {
        movables.forEach((movable) => {
            movable.position.x += 64;
            move = true
        })
    } else if (keys.s.pressed && lastKey === "s" && move == false) {
        movables.forEach((movable) => {
            movable.position.y -= 64;
            move = true
        })
    } else if (keys.d.pressed && lastKey === "d" && move == false) {
        movables.forEach((movable) => {
            movable.position.x -= 64;
            move = true
        })
    }
}
setInterval(() => {
    move = false;
  }, 200);
animate()