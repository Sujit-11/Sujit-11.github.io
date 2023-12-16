class Banana {
  constructor() {
    this.bananaImage = new Image()
    this.bananaImage.src = '../assets/images/fruits/banana.png'
    this.position = [
      [
        { x: 200, y: 200 },
        { x: 600, y: 300 },
      ],
      [
        { x: 100, y: 250 },
        { x: 800, y: 250 },
      ],
      [
        { x: 60, y: 295 },
        { x: 550, y: 150 },
      ],
      [
        { x: 200, y: 220 },
        { x: 600, y: 400 },
      ],
      [
        { x: 110, y: 450 },
        { x: 850, y: 250 },
      ],
    ]
    this.width = 25
    this.height = 48
    this.imageHeight = 48
    this.imageWidth = 270
  }
  update(ctx) {
    this.bananaLeftToCollect = this.position[levelValue].length
    for (let i = 0; i < this.position[levelValue].length; i++) {
      ctx.drawImage(
        this.bananaImage,
        0,
        0,
        this.imageWidth,
        this.imageHeight,
        this.position[levelValue][i].x,
        this.position[levelValue][i].y,
        this.imageWidth,
        this.imageHeight
      )
    }
    const { midCollisionPoints } = ellipseCollisionPoints()
    this.bananaCollision(midCollisionPoints)
  }
  bananaCollision(midCollisionPoints) {
    for (const { boundPointX, boundPointY } of midCollisionPoints) {
      for (let i = 0; i < this.position[levelValue].length; i++) {
        if (
          boundPointX < this.position[levelValue][i].x + this.width &&
          boundPointX > this.position[levelValue][i].x &&
          boundPointY < this.position[levelValue][i].y + this.height &&
          boundPointY > this.position[levelValue][i].y
        ) {
          this.position[levelValue].splice(i, 1)
          this.bananaLeftToCollect -= 1
          score += BANANA_POINT
        }
      }
    }
  }
}
