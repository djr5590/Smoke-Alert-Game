function boundaryWall(){
    let boundary = document.createElement('div')
    boundary.style.width = '100%'
    boundary.style.height = '800px'
    boundary.style.display = 'flex'
    boundary.style.flexDirection = 'row'
    boundary.style.alignItems = 'center'
    boundary.style.justifyContent = 'space-evenly'
    boundary.style.boundary = '10px black'
    boundary.style.backgroundColor = 'gray'
    document.body.append(boundary)
    return boundary
}