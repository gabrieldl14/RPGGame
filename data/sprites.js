let mapOffsetX = -320
let mapOffsetY = -224
let playerOffsetX = 512 - 64
let playerOffsetY = 224
const sprites = {
    map: new Sprite({
        position: {
            x: mapOffsetX,
            y: mapOffsetY
        },
        image: images.map
    }),
    player: new Sprite({
        position: {
            x: playerOffsetX,
            y: playerOffsetY
        },
        image: images.player
    })
}