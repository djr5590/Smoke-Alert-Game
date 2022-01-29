// click function to test
let shootingWater = false

function fire(url){
    let item = newImage(url)
    // let pc = newPlayableCharacter

    // element.style.left = x + 'px'
    // element.style.bottom = y + 'px'
   
    // function newFireExtinguish(){

    // }

    item.addEventListener('click', (e) =>{
        if(!shootingWater) return
        let element = document.getElementsByClassName("char")
        let charPos = element[0].getBoundingClientRect();
        console.log(charPos)
        console.log(e.clientX, e.clientY)

        // if(charPos.position.y - e <= fire.position.y 
        // && charPos.position.x - e <= fire.position.x){ fire before character

        item.remove()
        // }
    })
    return item
}



// function fire(url){
//     let item = newImage(url)
//     item.addEventListener('click', (e) =>{
//         let element = document.getElementsByClassName("char")
//         let charPos = element[0].getBoundingClientRect();
//         console.log(charPos)
//         console.log(e.clientX, e.clientY)
//         // console.log("fire out!")
//         item.remove()
//     })
//     return item
// }












//spacebar event listener
// function newFire(url){
//     let item = newImage(url)
//     item.addEventListener('keydown', event => {
//     })
//     return item
// }