// click function to test
function newFire(url){
    let item = newImage(url)
    item.addEventListener('click', () =>{
        item.remove()
    })
    return item
}


// spacebar event listener
// function newFire(url){
//     let item = newImage(url)
//     item.addEventListener('space', () =>{
//         item.remove() // error message populating, undefined
//     })
//     return item
// }