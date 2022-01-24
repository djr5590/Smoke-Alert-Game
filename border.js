function borderWall(){
    let border = document.createElement('div')
    border.style.width = '95%'
    border.style.height = '800px'
    border.style.display = 'flex'
    border.style.flexDirection = 'row'
    //border.style.alignItems = 'center'
    //border.style.justifyContent = 'space-evenly'
    border.style.border = '5px solid black'
    border.style.backgroundColor = 'gray'
    document.body.append(border)
    return border
}