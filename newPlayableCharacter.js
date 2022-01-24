function newPlayableCharacter(x, y) {
    const element = newImage('assets/smokeAlertChar.png')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === 'west') {
            element.src = `assets/smokeAlertChar.png`
            // or `assets/smokeAlertCharEast.png` if facing east
        }
        if (direction === 'east') {
            element.src = `assets/smokeAlertCharEast.png`
        }
    }

    move(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
}

function spacebarShootWater(){

    document.addEventListener('keydown', event => {
        if (event.code === 'Space') {
            // add gif/image of water shooting
        console.log('Space pressed')
        element.src = 'assets/waterColumn.png'
        // needs to shoot out of nozzle
        }
    })

    document.addEventListener('keyup', event => {
        if (event.code === 'Space') {
            // remove gif/image of water shooting
        console.log('Space pressed')
        element.src = 'assets/waterColumn.png'
        // needs to disapper
        }
    })

}