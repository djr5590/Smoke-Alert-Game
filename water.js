// unused function, not passed into HTML
function waterColumn(url){
    let water = newImage(url)
    water.addEventListener('keydown', event => {
        if (event.code === 'Space') {
            console.log("water!")
            water.remove()
        }
    })
    return item
}

// function waterColumn(url){
//     let item = newImage(url)
//     item.addEventListener('space', () =>{
//         console.log("fire out!")
//         item.remove()
//     })
//     return item
// }