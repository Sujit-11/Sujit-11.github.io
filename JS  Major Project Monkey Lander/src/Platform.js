class LandingSpace {
  constructor() {
    this.landingSpaceImg = new Image()
    this.landingSpaceImg.src = '../assets/images/platform.png'
    this.timer = 0

    this.position = { x: 760, y: 450 }
    this.height = 25
    this.width = 202
    this.nextLevelTimer = 0
    this.sound = false
    this.victorySound = false
  }
  update(ctx) {
    ctx.drawImage(
      this.landingSpaceImg,
      1,
      1,
      this.width,
      this.height,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )
  }
}
