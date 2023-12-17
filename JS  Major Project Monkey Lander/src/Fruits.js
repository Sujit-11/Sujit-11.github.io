class Fruit {
  constructor() {
    this.image = new Image()
    this.fruitImages = [
      '../assets/images/fruits/cherry.png',
      '../assets/images/fruits/lemon.png',
      '../assets/images/fruits/pineapple.png',
    ]

    
    this.position= [
      [{ x: 430, y: 250 }],
      [
        { x: 550, y: 300 },
        { x: 350, y: 300 },
      ],
      [
        { x: 880, y: 150 },
        { x: 670, y: 350 },
        { x: 350, y: 350 },
      ],
      [
        { x: 500, y: 60 },
        { x: 850, y: 250 },
        { x: 900, y: 450 },
      ],
      [
        { x: 250, y: 390 },
        { x: 580, y: 360 },
        { x: 650, y: 220 },
      ],
    ]
    this.width = 25
    this.height = 48
    this.imageHeight = 64
    this.imageWidth = 270
    this.setFruitTypeForLevel()
  }
  setFruitTypeForLevel(){
    this.fruitNum = Math.round(Math.random() * (this.fruitImages.length - 1))
  }
  update(ctx) {
    for (let i = 0; i < this.position[levelValue]?.length; i++) {
      this.image.src = this.fruitImages[this.fruitNum]
      ctx.drawImage(
        this.image,
        0,
        0,
        this.imageWidth,
        this.imageHeight,
        this.position[levelValue][i].x,
        this.position[levelValue][i].y,
        this.imageWidth,
        this.imageHeight
      )
      const { midCollisionPoints } = ellipseCollisionPoints()
      this.fruitCollision(midCollisionPoints)
    }
  }
  fruitCollision(midCollisionPoints) {
    for (const { boundPointX, boundPointY } of midCollisionPoints) {
      for (let i = 0; i < this.position[levelValue]?.length; i++) {
        if (
          boundPointX < this.position[levelValue][i].x + this.width &&
          boundPointX > this.position[levelValue][i].x &&
          boundPointY < this.position[levelValue][i].y + this.height &&
          boundPointY > this.position[levelValue][i].y
        ) {
          sound.eat.play()
          this.position[levelValue].splice(i, 1)
          score += FRUIT_POINT
        }
      }
    }
  }
}
