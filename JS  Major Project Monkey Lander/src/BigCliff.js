class BigCliff {
  constructor() {
    this.image = new Image()
    this.image.src = 'assets/images/big-cliff.png'
    this.sX = 0
    this.sY = 0
    this.width = 147
    this.height = 219
    this.x = -2
    this.y = 320
    this.points = [
      { x: this.x, y: this.y + 2 },
      { x: this.x + 27, y: this.y + 12 },
      { x: this.x + 80, y: this.y + 19 },
      { x: this.x + 115, y: this.y + 18 },
      { x: this.x + 140, y: this.y + 32 },
      { x: this.x + 147, y: this.y + 50 },
      { x: this.x + 135, y: this.y + 90 },
      { x: this.x + 116, y: this.y + 120 },
      { x: this.x + 103, y: this.y + 165 },
      { x: this.x + 106, y: this.y + 200 },
      { x: this.x + 99, y: this.y + 219 },
      { x: this.x, y: this.y + 219 },
      { x: this.x, y: this.y + 2 },
    ]
  }
  update(ctx) {
    ctx.drawImage(
      this.image,
      this.sX,
      this.sY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    )

    //Drawing Polygon
    ctx.beginPath()
    ctx.moveTo(this.points[0].x, this.points[0].y)
    for (let i = 1; i < this.points.length; i++) {
      ctx.lineTo(this.points[i].x, this.points[i].y)
    }
    ctx.strokeStyle = 'blue'
    ctx.stroke()
    ctx.closePath()

    //Check Collision
    const { allCollisionPoints } = ellipseCollisionPoints()
    for (let i = 0; i < allCollisionPoints.length; i++) {
      if (isPointInPolygon(allCollisionPoints[i], this.points)) {
        life.dead()
        break
      }
    }
  }
}
