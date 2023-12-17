/**Ellipse Boundary Points */

function ellipseCollisionPoints() {
  
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
    }
  }
  let allCollisionPoints = [...midCollisionPoints,...headCollisionPoints,...leftFootCollisionPoints,...rightFootCollisionPoints]

  return {midCollisionPoints,headCollisionPoints,leftFootCollisionPoints,rightFootCollisionPoints,allCollisionPoints}
}

/** Ray Casting Algo */
function isPointInPolygon(point, polygon) {
    let minX = polygon[0].x, maxX = polygon[0].x;
    let minY = polygon[0].y, maxY = polygon[0].y;
  
    for (let i = 1; i < polygon.length; i++) {
      let q = polygon[i];
      minX = Math.min(q.x, minX);
      maxX = Math.max(q.x, maxX);
      minY = Math.min(q.y, minY);
      maxY = Math.max(q.y, maxY);
    }
  
    if (point.boundPointX < minX || point.boundPointX > maxX || point.boundPointY < minY || point.boundPointY > maxY) {
      return false;
    }
  
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      if ((polygon[i].y > point.boundPointY) != (polygon[j].y > point.boundPointY) &&
          point.boundPointX < (polygon[j].x - polygon[i].x) * (point.boundPointY - polygon[i].y) / (polygon[j].y - polygon[i].y) + polygon[i].x) {
        inside = !inside;
      }
    }
  
    return inside;
}

  
