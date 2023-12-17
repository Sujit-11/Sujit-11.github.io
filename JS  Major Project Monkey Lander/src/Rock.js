class Rock {
  constructor() {
    this.image = new Image()
    this.image.src = 'assets/images/rock.png'
    this.position = [{}, {}, {}, {}, { x: -1, y: -2 }]
    this.height = 122
    this.width = 122
    this.sX = 0
    this.sY = 0
  }
  update(ctx) {
    this.points = [
      { x: this.position[levelValue].x, y: this.position[levelValue].y },
      { x: this.position[levelValue].x + 120, y: this.position[levelValue].y },
      {
        x: this.position[levelValue].x + 111,
        y: this.position[levelValue].y + 70,
      },
      {
        x: this.position[levelValue].x + 112,
        y: this.position[levelValue].y + 100,
      },
      {
        x: this.position[levelValue].x + 107,
        y: this.position[levelValue].y + 112,
      },
      {
        x: this.position[levelValue].x + 85,
        y: this.position[levelValue].y + 120,
      },
      {
        x: this.position[levelValue].x + 25,
        y: this.position[levelValue].y + 120,
      },
      { x: this.position[levelValue].x, y: this.position[levelValue].y + 116 },
      { x: this.position[levelValue].x, y: this.position[levelValue].y },
    ]
    ctx.drawImage(
      this.image,
      this.sX,
      this.sY,
      this.width,
      this.height,
      this.position[levelValue].x,
      this.position[levelValue].y,
      this.width,
      this.height
    )
    // Draw Polygon
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
