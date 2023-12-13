class Banana {
  constructor() {
    this.bananaImage = new Image()
    this.bananaImage.src = '../assets/images/fruits/banana.png'
    this.position = [
      { x: 200, y: 200 },
      { x: 600, y: 300 },
    ]
    this.width = 25
    this.height = 48
    this.imageHeight = 48
    this.imageWidth = 270
  }
  update(ctx) {
    this.bananaLeftToCollect = this.position.length
    for (let i = 0; i < this.position.length; i++) {
      ctx.drawImage(
        this.bananaImage,
        0,
        0,
        this.imageWidth,
        this.imageHeight,
        this.position[i].x,
        this.position[i].y,
        this.imageWidth,
        this.imageHeight
      )
    }
    const { midCollisionPoints } = checkCollision()
    this.bananaCollision(midCollisionPoints)
  }
  bananaCollision(midCollisionPoints) {
    for (const { boundPointX, boundPointY } of midCollisionPoints) {
          for (let i = 0; i < this.position.length; i++) {
        if (
          boundPointX < this.position[i].x + this.width &&
          boundPointX > this.position[i].x &&
          boundPointY < this.position[i].y + this.height &&
          boundPointY > this.position[i].y
        ) {
          this.position.splice(i, 1)
          this.bananaLeftToCollect -= 1
        }
      }
    }
  }
}
