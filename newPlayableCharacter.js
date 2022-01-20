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