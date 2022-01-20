function fire(url, left, bottom){
    let item = newImage(url, left, bottom)
    item.addEventListener('click', function(){
        item.remove()
    })
}