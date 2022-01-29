// click function to test
let shootingWater = false

function fire(url){
    let item = newImage(url)
   
    item.addEventListener('click', (e) =>{
        if(!shootingWater) return
        let element = document.getElementsByClassName("char")
        let charPos = element[0].getBoundingClientRect();
        console.log(charPos)
        console.log(e.clientX, e.clientY)

        // item.remove()
        
        // if(item.position.x - charPos.position.x <= 1000
        //     && item.position.y - charPos.position.y <= 1000){
        //         console.log(item.position.x - charPos.position.x)
        //     }

        if(e.clientX - charPos.x <= 100
            && e.clientY - charPos.y <= 100){
                console.log(e.clientX - charPos.x)
                item.remove()
            }    
    })
    return item
}

