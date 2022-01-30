const element = newImage('assets/smokeAlertChar.png')
element.setAttribute("class", "char")
element.style.zIndex = 1;

function newPlayableCharacter(x, y) {

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
    // move(element).withArrowKeys(x, y, shootWater)

    return {
        element: element
    }
}

document.addEventListener('keydown', event => {
    console.log(event.code)
    if (event.code === 'Space'){
        shootingWater = true
        if (directionFacing === 'west') {
            element.src = 'assets/extShootWest.png'         
        }
        if (directionFacing === 'east') {
            element.src = 'assets/extShootEast.png'
        }
    }
})

document.addEventListener('keyup', event => {
    console.log(event.code)
    if (event.code === 'Space'){
        shootingWater = false
        if (directionFacing === 'west') {
            element.src = 'assets/smokeAlertChar.png'
        }
        if (directionFacing === 'east') {
            element.src = 'assets/smokeAlertCharEast.png'
        }
    }
})