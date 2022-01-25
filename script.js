
const pc = newPlayableCharacter(100, 200) 
// const water = shootWater(60,250)

// move(character).withArrowKeys(100, 250)
const border = borderWall()

move(newImage('assets/cupboard.png')).to(500, 175)
move(newImage('assets/cupboard.png')).to(100, 675)
move(newImage('assets/stove.png')).to(1200, 400)
move(newImage('assets/waterColumn.gif')).to(70,238) 
    // offset +/-30 x-axis, +38 y-axis to character
    
move(newFire('assets/Extras/fire.gif')).to(1200, 450)
move(newFire('assets/Extras/fire.gif')).to(1210, 450)
move(newFire('assets/Extras/fire.gif')).to(1220, 450)
move(newFire('assets/Extras/fire.gif')).to(1230, 450)
move(newFire('assets/Extras/fire.gif')).to(1240, 450)

move(newFire('assets/Extras/fire.gif')).to(500, 215)
move(newFire('assets/Extras/fire.gif')).to(510, 215)
move(newFire('assets/Extras/fire.gif')).to(520, 215)
move(newFire('assets/Extras/fire.gif')).to(530, 215)
move(newFire('assets/Extras/fire.gif')).to(540, 215)
move(newFire('assets/Extras/fire.gif')).to(550, 215)

// document.addEventListener('keyup', event => {
//     if (event.code === 'Space') {
//         console.log('spacebar pressed')
//         // remove(newImage('assets/Extras/fire.gif'))
//     }
// })