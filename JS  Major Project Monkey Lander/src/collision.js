function checkCollision() {
  
  let midCollisionPoints = []
  let headCollisionPoints = []
  let leftFootCollisionPoints = []
  let rightFootCollisionPoints = []


  for (let i = 0; i < ufo.ellipse.length; i++) {
    // Generate points along the boundary of the UFO i.e each sectional ellipses with step of 5 degree that is (0.0873)
    for (let theta = 0; theta <= 2 * Math.PI; theta += 0.0873) {
      const boundPointX =
        ufo.ellipse[i].x + ufo.ellipse[i].radiusX * Math.cos(theta)
      const boundPointY =
        ufo.ellipse[i].y + ufo.ellipse[i].radiusY * Math.sin(theta)
      if(i === 0){
        midCollisionPoints.push({boundPointX,boundPointY})
      }else if(i === 1){
        headCollisionPoints.push({boundPointX,boundPointY})
      }
      else if(i === 2){
        leftFootCollisionPoints.push({boundPointX,boundPointY})
      }else{
        rightFootCollisionPoints.push({boundPointX,boundPointY})
      }

      // if (
      //   boundPointX < 0 || // left of canvas
      //   boundPointX > canvas.width || // right of canvas
      //   // boundPointY  < 0 || // top of canvas
      //   boundPointY > canvas.height //bottom of canvas
      // ) {
      //   // console.log('Collision detected with canvas boundary!')
      // }

    }
  }
  let allCollisionPoints = [...midCollisionPoints,...headCollisionPoints,...leftFootCollisionPoints,...rightFootCollisionPoints]

  return {midCollisionPoints,headCollisionPoints,leftFootCollisionPoints,rightFootCollisionPoints,allCollisionPoints}
}
