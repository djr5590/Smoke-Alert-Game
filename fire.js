// click function to test
function newFire(url){
    let item = newImage(url)
    item.addEventListener('click', (e) =>{
        let element = document.getElementsByClassName("char")
        let rect = element[0].getBoundingClientRect();
        console.log(charPos)
        console.log(e.clientX, e.clientY)
        
        // console.log("fire out!")
        item.remove()
    })
    return item
}



//spacebar event listener
// function newFire(url){
//     let item = newImage(url)
//     item.addEventListener('keydown', event => {
//     })
//     return item
// }