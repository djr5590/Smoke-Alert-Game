// click function to test
function newFire(url){
    let item = newImage(url)
    item.addEventListener('click', () =>{
        item.remove()
    })
    return item
}


//spacebar event listener
// function newFire(url){
//     let item = newImage(url)
//     item.addEventListener('keydown', event => {
//         if (event.code === 'Space') {
//             console.log('Space pressed')
//             item.remove() //error message populating, undefined
//         }
//     })
//     return item
// }