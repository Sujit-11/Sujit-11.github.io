class RopeRight {
  constructor() {
    this.image = new Image()
    this.image.src = 'assets/images/rope.png'
    this.sX = 0
    this.sY = 173
    this.width = 157
    this.height = 172
    this.x = 837
    this.y = 0
    this.points = [
      { x: this.x, y: this.y },
      { x: this.x + 27, y: this.y + 50 },
      { x: this.x + 56, y: this.y + 90 },
      { x: this.x + 99, y: this.y + 130 },
      { x: this.x + 128, y: this.y + 150 },
      { x: this.x + 157, y: this.y + 172 },
      { x: this.x + 157, y: this.y },
      { x: this.x, y: this.y },
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

    //drawing Polygon
    ctx.beginPath()
    ctx.moveTo(this.x, this.y)
    ctx.lineTo(this.x + 27, this.y + 50)
    ctx.lineTo(this.x + 56, this.y + 90)
    ctx.lineTo(this.x + 99, this.y + 130)
    ctx.lineTo(this.x + 128, this.y + 150)
    ctx.lineTo(this.x + 157, this.y + 172)
    ctx.lineTo(this.x + 157, this.y)
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
