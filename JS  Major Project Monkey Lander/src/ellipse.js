const ufo = new Ufo();

const ellipseColors = ['red', 'yellow', 'green', 'orange', 'purple']; 
let ellipse = [
  {
    x: ufo.x + ufo.width / 2,
    y: ufo.y + ufo.height / 2 + 7,
    radiusX: 78, // horizontal radius
    radiusY: 32, // vertical radius
    rotn: 0,
    startAngle: 0,
    endAngle: 2 * Math.PI,
  },
  {
    x: ufo.x + ufo.width / 2,
    y: ufo.y + 32,
    radiusX: 45, // horizontal radius
    radiusY: 32, // vertical radius
    rotn: 0,
    startAngle: 0,
    endAngle: 2 * Math.PI,
  },
  {
    x: ufo.x + 42,
    y: ufo.y + 100,
    radiusX: 12, // horizontal radius
    radiusY: 4, // vertical radius
    rotn: (Math.PI / 180) * 25,
    startAngle: 0,
    endAngle: 2 * Math.PI,
  },
  {
    x: ufo.x + 145,
    y: ufo.y + 100,
    radiusX: 12, // horizontal radius
    radiusY: 4, // vertical radius
    rotn: (Math.PI / 180) * 335,
    startAngle: 0,
    endAngle: 2 * Math.PI,
  },
]

// function drawBoundingEllipse(i, color) {
//   ctx.beginPath()
//   ctx.ellipse(
//     ellipse[i].x,
//     ellipse[i].y,
//     ellipse[i].radiusX,
//     ellipse[i].radiusY,
//     ellipse[i].rotn,
//     ellipse[i].startAngle,
//     ellipse[i].endAngle
//   )
//   ctx.fillStyle = color
//   ctx.fill()
//   // ctx.closePath()
// }

function checkCollision(i) {
  const boundingBoxEllipsePath = new Path2D()
  boundingBoxEllipsePath.ellipse(
    ellipse[i].x,
    ellipse[i].y,
    ellipse[i].radiusX,
    ellipse[i].radiusY,
    ellipse[i].rotn,
    ellipse[i].startAngle,
    ellipse[i].endAngle 
  )

  if (
    ctx.isPointInPath(boundingBoxEllipsePath, platform.position.x, platform.position.y) ||
    ctx.isPointInPath(
      boundingBoxEllipsePath,
      platform.position.x + platform.width,
      platform.position.y
    ) ||
    ctx.isPointInPath(
      boundingBoxEllipsePath,
      platform.position.x,
      platform.position.y + platform.height
    ) ||
    ctx.isPointInPath(
      boundingBoxEllipsePath,
      platform.position.x + platform.width,
      platform.position.y + platform.height
    )
  ) {
    console.log('Collision detected!')
  }


  
}

// image.onload = function () {
//   ctx.fillStyle = 'blue'
//   ctx.fillRect(ufo.x, ufo.y, 191.6, 105)
//   for (let i = 0; i <= ellipse.length - 1; i++) {
//     drawBoundingEllipse(i, ellipseColors[i % ellipseColors.length])
//   }
  // ctx.drawImage(
  //   image,
  //   0,
  //   0,
  //   ufo.width,
  //   ufo.height,
  //   ufo.x,
  //   ufo.y,
  //   ufo.width,
  //   ufo.height
  // )
// }
