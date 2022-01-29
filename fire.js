// click function to test
let shootingWater = false

function fire(url){
    item.addEventListener('click', (e) =>{
        if(!shootingWater) return
        let element = document.getElementsByClassName("char")
        let charPos = element[0].getBoundingClientRect();
        console.log(charPos)
        console.log(e.clientX, e.clientY)

        // if(fire.position.y - e <= charPos.position.y 
        // && fire.position.x - e <= charPos.position.x)
        item.remove()
        
    })
    return item
}
