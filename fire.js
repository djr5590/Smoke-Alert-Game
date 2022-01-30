// click function to test
let shootingWater = false
let startedStopwatch = false;

function fire(url){
    let item = newImage(url)
   
    item.addEventListener('click', (e) =>{
        if(!shootingWater) return
        let element = document.getElementsByClassName("char")
        let charPos = element[0].getBoundingClientRect();
        console.log(charPos)
        console.log(e.clientX, e.clientY)
    
        if(e.clientX - charPos.x <= 120
            && e.clientY - charPos.y <= 120) {
                console.log(e.clientX - charPos.x)
                console.log(e.clientY - charPos.y)
                item.remove()
            }    
    })
    return item

    // if (!startedStopwatch) {
    //     startTimer();
    //     startedStopwatch = true;
    //   }
}

