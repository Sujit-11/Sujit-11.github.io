class Tree {
  constructor() {
    this.image = new Image()
    this.image.src = '../assets/images/tree.png'
    this.position = [
      {},
      {},
      { x: -70, y: 100 },
      { x: 480, y: 140 },
      { x: -20, y: 190 },
      {},
    ]
    this.sX = 0
    this.sY = 0
    this.width = 278
    this.height = 437
  }
  update(ctx) {
    this.points = [
      { x: this.position[levelValue].x + 100, y: this.position[levelValue].y },
      {
        x: this.position[levelValue].x + 130,
        y: this.position[levelValue].y + 7,
      },
      {
        x: this.position[levelValue].x + 162,
        y: this.position[levelValue].y + 31,
      },
      {
        x: this.position[levelValue].x + 220,
        y: this.position[levelValue].y + 36,
      },
      {
        x: this.position[levelValue].x + 180,
        y: this.position[levelValue].y + 52,
      },
      {
        x: this.position[levelValue].x + 230,
        y: this.position[levelValue].y + 70,
      },
      {
        x: this.position[levelValue].x + 260,
        y: this.position[levelValue].y + 100,
      },
      {
        x: this.position[levelValue].x + 275,
        y: this.position[levelValue].y + 125,
      },
      {
        x: this.position[levelValue].x + 220,
        y: this.position[levelValue].y + 105,
      },
      {
        x: this.position[levelValue].x + 190,
        y: this.position[levelValue].y + 105,
      },
      {
        x: this.position[levelValue].x + 220,
        y: this.position[levelValue].y + 145,
      },
      {
        x: this.position[levelValue].x + 225,
        y: this.position[levelValue].y + 175,
      },
      {
        x: this.position[levelValue].x + 200,
        y: this.position[levelValue].y + 145,
      },
      {
        x: this.position[levelValue].x + 173,
        y: this.position[levelValue].y + 140,
      },
      {
        x: this.position[levelValue].x + 173,
        y: this.position[levelValue].y + 180,
      },
      {
        x: this.position[levelValue].x + 166,
        y: this.position[levelValue].y + 195,
      },
      {
        x: this.position[levelValue].x + 136,
        y: this.position[levelValue].y + 128,
      },
      {
        x: this.position[levelValue].x + 100,
        y: this.position[levelValue].y + 200,
      },
      {
        x: this.position[levelValue].x + 88,
        y: this.position[levelValue].y + 250,
      },
      {
        x: this.position[levelValue].x + 87,
        y: this.position[levelValue].y + 315,
      },
      {
        x: this.position[levelValue].x + 102,
        y: this.position[levelValue].y + 380,
      },
      {
        x: this.position[levelValue].x + 130,
        y: this.position[levelValue].y + 435,
      },
      {
        x: this.position[levelValue].x + 77,
        y: this.position[levelValue].y + 435,
      },
      {
        x: this.position[levelValue].x + 63,
        y: this.position[levelValue].y + 300,
      },
      {
        x: this.position[levelValue].x + 70,
        y: this.position[levelValue].y + 220,
      },
      {
        x: this.position[levelValue].x + 78,
        y: this.position[levelValue].y + 189,
      },
      {
        x: this.position[levelValue].x + 57,
        y: this.position[levelValue].y + 189,
      },
      {
        x: this.position[levelValue].x + 57,
        y: this.position[levelValue].y + 210,
      },
      {
        x: this.position[levelValue].x + 47,
        y: this.position[levelValue].y + 180,
      },
      {
        x: this.position[levelValue].x + 52,
        y: this.position[levelValue].y + 150,
      },
      {
        x: this.position[levelValue].x + 25,
        y: this.position[levelValue].y + 150,
      },
      {
        x: this.position[levelValue].x + 5,
        y: this.position[levelValue].y + 180,
      },
      {
        x: this.position[levelValue].x + 10,
        y: this.position[levelValue].y + 140,
      },
      {
        x: this.position[levelValue].x + 30,
        y: this.position[levelValue].y + 103,
      },
      {
        x: this.position[levelValue].x + 70,
        y: this.position[levelValue].y + 68,
      },
      {
        x: this.position[levelValue].x + 1,
        y: this.position[levelValue].y + 72,
      },
      {
        x: this.position[levelValue].x + 38,
        y: this.position[levelValue].y + 43,
      },
      {
        x: this.position[levelValue].x + 90,
        y: this.position[levelValue].y + 31,
      },
      {
        x: this.position[levelValue].x + 120,
        y: this.position[levelValue].y + 31,
      },
      {
        x: this.position[levelValue].x + 113,
        y: this.position[levelValue].y + 10,
      },
      { x: this.position[levelValue].x + 100, y: this.position[levelValue].y },
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

    //Drawing Polygon
    ctx.beginPath()
    ctx.moveTo(this.position[levelValue].x + 100, this.position[levelValue].y)
    ctx.lineTo(
      this.position[levelValue].x + 130,
      this.position[levelValue].y + 7
    )
    ctx.lineTo(
      this.position[levelValue].x + 162,
      this.position[levelValue].y + 31
    )
    ctx.lineTo(
      this.position[levelValue].x + 220,
      this.position[levelValue].y + 36
    )
    ctx.lineTo(
      this.position[levelValue].x + 180,
      this.position[levelValue].y + 52
    )
    ctx.lineTo(
      this.position[levelValue].x + 230,
      this.position[levelValue].y + 70
    )
    ctx.lineTo(
      this.position[levelValue].x + 260,
      this.position[levelValue].y + 100
    )
    ctx.lineTo(
      this.position[levelValue].x + 275,
      this.position[levelValue].y + 125
    )
    ctx.lineTo(
      this.position[levelValue].x + 220,
      this.position[levelValue].y + 105
    )
    ctx.lineTo(
      this.position[levelValue].x + 190,
      this.position[levelValue].y + 105
    )
    ctx.lineTo(
      this.position[levelValue].x + 220,
      this.position[levelValue].y + 145
    )
    ctx.lineTo(
      this.position[levelValue].x + 225,
      this.position[levelValue].y + 175
    )
    ctx.lineTo(
      this.position[levelValue].x + 200,
      this.position[levelValue].y + 145
    )
    ctx.lineTo(
      this.position[levelValue].x + 173,
      this.position[levelValue].y + 140
    )
    ctx.lineTo(
      this.position[levelValue].x + 173,
      this.position[levelValue].y + 180
    )
    ctx.lineTo(
      this.position[levelValue].x + 166,
      this.position[levelValue].y + 195
    )
    ctx.lineTo(
      this.position[levelValue].x + 136,
      this.position[levelValue].y + 128
    )
    ctx.lineTo(
      this.position[levelValue].x + 100,
      this.position[levelValue].y + 200
    )
    ctx.lineTo(
      this.position[levelValue].x + 88,
      this.position[levelValue].y + 250
    )
    ctx.lineTo(
      this.position[levelValue].x + 87,
      this.position[levelValue].y + 315
    )
    ctx.lineTo(
      this.position[levelValue].x + 102,
      this.position[levelValue].y + 380
    )
    ctx.lineTo(
      this.position[levelValue].x + 130,
      this.position[levelValue].y + 435
    )
    ctx.lineTo(
      this.position[levelValue].x + 77,
      this.position[levelValue].y + 435
    )
    ctx.lineTo(
      this.position[levelValue].x + 63,
      this.position[levelValue].y + 300
    )
    ctx.lineTo(
      this.position[levelValue].x + 70,
      this.position[levelValue].y + 220
    )
    ctx.lineTo(
      this.position[levelValue].x + 78,
      this.position[levelValue].y + 189
    )
    ctx.lineTo(
      this.position[levelValue].x + 57,
      this.position[levelValue].y + 189
    )
    ctx.lineTo(
      this.position[levelValue].x + 57,
      this.position[levelValue].y + 210
    )
    ctx.lineTo(
      this.position[levelValue].x + 47,
      this.position[levelValue].y + 180
    )
    ctx.lineTo(
      this.position[levelValue].x + 52,
      this.position[levelValue].y + 150
    )
    ctx.lineTo(
      this.position[levelValue].x + 25,
      this.position[levelValue].y + 150
    )
    ctx.lineTo(
      this.position[levelValue].x + 5,
      this.position[levelValue].y + 180
    )
    ctx.lineTo(
      this.position[levelValue].x + 10,
      this.position[levelValue].y + 140
    )
    ctx.lineTo(
      this.position[levelValue].x + 30,
      this.position[levelValue].y + 103
    )
    ctx.lineTo(
      this.position[levelValue].x + 70,
      this.position[levelValue].y + 68
    )
    ctx.lineTo(
      this.position[levelValue].x + 1,
      this.position[levelValue].y + 72
    )
    ctx.lineTo(
      this.position[levelValue].x + 38,
      this.position[levelValue].y + 43
    )
    ctx.lineTo(
      this.position[levelValue].x + 90,
      this.position[levelValue].y + 31
    )
    ctx.lineTo(
      this.position[levelValue].x + 120,
      this.position[levelValue].y + 31
    )
    ctx.lineTo(
      this.position[levelValue].x + 113,
      this.position[levelValue].y + 10
    )
    ctx.lineTo(this.position[levelValue].x + 100, this.position[levelValue].y)
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
