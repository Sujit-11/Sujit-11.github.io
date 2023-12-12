function checkCollision() {
  for (let i = 0; i < ufo.ellipse.length; i++) {
    // Generate points along the boundary of the UFO i.e ellipses
    for (let theta = 0; theta < 2 * Math.PI; theta += Math.PI / 2) {
      const x =
        ufo.ellipse[i].x + ufo.ellipse[i].radiusX * Math.cos(theta)
      const y =
        ufo.ellipse[i].y + ufo.ellipse[i].radiusY * Math.sin(theta)

      if (
        x < 0 || // left of canvas
        x > canvas.width || // right of canvas
        // y < 0 || // top of canvas
        y > canvas.height//bottom of canvas
        ||(x > landingSpace.position.x &&
            x < landingSpace.position.x + landingSpace.width &&
            y > landingSpace.position.y &&    
            y < landingSpace.position.y + landingSpace.height) //platform
      ) {
        // console.log('Collision detected with canvas boundary!')
        ufo.gravity = 0 // Stop vertical movement on collision
        ufo.gravitySpeed = 0 // Stop vertical movement on collision
        ufo.verticalSpeed = 0 // ""
      }
      else {
        ufo.gravity = 0.01
        // ufo.gravitySpeed = 0
      }
    }
  }
}


