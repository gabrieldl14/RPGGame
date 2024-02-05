let lastKey = "";
const movables = [sprites.map]
const keys = {
    w: { 
        pressed: false
    },
    a: { 
        pressed: false
    },
    s: { 
        pressed: false
    },
    d: { 
        pressed: false
    }
}

window.addEventListener("keydown", (e) => {
    switch(e.key) {
        case "w":
            keys.w.pressed = true;
            lastKey = "w";
            break;
        case "a":
            keys.a.pressed = true;
            lastKey = "a";
            break;
        case "s":
            keys.s.pressed = true;
            lastKey = "s";
            break;
        case "d":
            keys.d.pressed = true;
            lastKey = "d";
            break;
    }
})

window.addEventListener("keyup", (e) => {
    switch(e.key) {
        case "w":
            keys.w.pressed = false;
            break;
        case "a":
            keys.a.pressed = false;
            break;
        case "s":
            keys.s.pressed = false;
            break;
        case "d":
            keys.d.pressed = false;
            break;
    }
})

