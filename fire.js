// click function to test
function fire(url){
    let item = newImage(url)
    // let pc = newPlayableCharacter

    // element.style.left = x + 'px'
    // element.style.bottom = y + 'px'
   
    // function newFireExtinguish(){

    // }

    item.addEventListener('click', (e) =>{
        let element = document.getElementsByClassName("char")
        let charPos = element[0].getBoundingClientRect();
        console.log(charPos)
        console.log(e.clientX, e.clientY)

        if(e.click){
        item.remove()
        //}
    }
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