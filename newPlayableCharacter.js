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

function shootWater(x, y) {
    const element = newImage('assets/waterColumn.gif')
    element.style.zIndex = 0;

    function pressSpaceBar(event) {
        if (event.code === 'Space') {
            element.src = 'assets/waterColumn.gif'
        }
    }

    key(element).withSpaceBar(x, y, pressSpaceBar)

    return {
        element: element
    }

}

document.addEventListener('keydown', event => {
    if (event.code === 'Space') {
        console.log('Space pressed')
    }
})

