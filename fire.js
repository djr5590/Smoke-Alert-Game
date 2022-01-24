function newFire(url, left, bottom){
    let item = newImage(url, left, bottom)
    item.addEventListener('click', () =>{
        item.remove()
    })
    return item
}