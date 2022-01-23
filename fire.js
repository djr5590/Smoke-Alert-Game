function newFire(url){
    let fire = newImage(url)
    fire.addEventListener('click', () =>{
        fire.remove()
    })
    return fire
}