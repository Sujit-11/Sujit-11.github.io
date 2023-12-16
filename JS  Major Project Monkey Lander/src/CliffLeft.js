class CliffLeft {
  constructor() {
    this.image = new Image()
    this.image.src = '../assets/images/cliff.png'
    this.sX = 0
    this.sY = 0
    this.width = 302
    this.height = 202
    this.x = -3
    this.y = 328
    this.points = [
      { x: this.x, y: this.y + 3 },
      { x: this.x + 85, y: this.y + 55 },
      { x: this.x + 140, y: this.y + 80 },
      { x: this.x + 210, y: this.y + 92 },
      { x: this.x + 265, y: this.y + 99 },
      { x: this.x + 292, y: this.y + 110 },
      { x: this.x + 300, y: this.y + 125 },
      { x: this.x + 300, y: this.y + 145 },
      { x: this.x + 265, y: this.y + 190 },
      { x: this.x + 260, y: this.y + 202 },
      { x: this.x, y: this.y + 202 },
      { x: this.x, y: this.y + 3 },
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

    //polygon
    ctx.beginPath()
    ctx.moveTo(this.x, this.y + 3)
    ctx.lineTo(this.x + 85, this.y + 55)
    ctx.lineTo(this.x + 140, this.y + 80)
    ctx.lineTo(this.x + 210, this.y + 92)
    ctx.lineTo(this.x + 265, this.y + 99)
    ctx.lineTo(this.x + 292, this.y + 110)
    ctx.lineTo(this.x + 300, this.y + 125)
    ctx.lineTo(this.x + 300, this.y + 145)
    ctx.lineTo(this.x + 265, this.y + 190)
    ctx.lineTo(this.x + 260, this.y + 202)
    ctx.lineTo(this.x, this.y + 202)
    ctx.lineTo(this.x, this.y + 3)
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
