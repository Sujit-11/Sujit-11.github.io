class Fruit {
  constructor() {
    this.image = new Image()
    this.fruitImages = [
      '../assets/images/fruits/cherry.png',
      '../assets/images/fruits/lemon.png',
      '../assets/images/fruits/pineapple.png',
    ]

    this.fruitNum = Math.round(Math.random() * (this.fruitImages.length - 1));

    this.position = [{ x: 430,y: 250 },]
    this.width = 25
    this.height = 48
    this.imageHeight = 64
    this.imageWidth = 270
  }
  update(ctx){
    for (let i = 0; i < this.position.length; i++) {
    this.image.src = this.fruitImages[this.fruitNum]
    ctx.drawImage(
        this.image,
        0,
        0,
        this.imageWidth,
        this.imageHeight,
        this.position[i].x,
        this.position[i].y,
        this.imageWidth,
        this.imageHeight
    )
    const { midCollisionPoints } = checkCollision()
    this.fruitCollision(midCollisionPoints)
    }
  }
  fruitCollision(midCollisionPoints){
    for (const { boundPointX, boundPointY } of midCollisionPoints) {
      for (let i = 0; i < this.position.length; i++) {
    if (
      boundPointX < this.position[i].x + this.width &&
      boundPointX > this.position[i].x &&
      boundPointY < this.position[i].y + this.height &&
      boundPointY > this.position[i].y
    ) {
      this.position.splice(i, 1)
    }
  }
}
  }
}
