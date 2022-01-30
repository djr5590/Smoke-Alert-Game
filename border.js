function borderWall(){
    let border = document.createElement('div')
    border.style.width = '95%'
    border.style.height = '600px' // see if height can be adjusted in percentage
    border.style.display = 'flex'
    //border.style.flexDirection = 'row'
    //border.style.alignItems = 'center'
    //border.style.justifyContent = 'space-evenly'
    border.style.border = '5px solid black'
    border.style.backgroundColor = 'gray'
    document.body.append(border) // re establish purpose of this line
    return border
}

// do I need display and flexDirection?