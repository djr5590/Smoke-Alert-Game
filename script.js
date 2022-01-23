
const pc = newPlayableCharacter(100, 200)

// move(character).withArrowKeys(100, 250)
const boundary = boundaryWall()

move(newImage('assets/cupboard.png')).to(500, 175)
move(newImage('assets/cupboard.png')).to(100, 675)
move(newImage('assets/stove.png')).to(1200, 400)

move(newFire('assets/Extras/fire.gif')).to(1200, 450)
move(newFire('assets/Extras/fire.gif')).to(1210, 450)
move(newFire('assets/Extras/fire.gif')).to(1220, 450)
move(newFire('assets/Extras/fire.gif')).to(1230, 450)
move(newFire('assets/Extras/fire.gif')).to(1240, 450)

// document.addEventListener('keyup', event => {
//     if (event.code === 'Space') {
//       remove(newImage('assets/Extras/fire.gif'))
//     }
// })