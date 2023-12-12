class Ufo {
  constructor() {
    this.width = 191.6
    this.height = 105

    this.sX = 0
    this.sY = 0

    this.position = { x: 90, y: -10 }

    this.ufoImage = new Image()
    this.ufoImage.src = '../assets/images/character/ufo.png'
    
    this.movementFactor = 0.2
    this.horizontalSpeed = 0
    this.horizontalSpeedFactor = 0.2

    this.verticalSpeed = 0
    this.verticalSpeedFactor = 0.05

    this.gravitySpeed = 0
    this.gravity = 0.001
    this.landingClock = 0
  }
  update(ctx, backgroundImg) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(
      this.ufoImage,
      0,
      this.sY,
      191.6,
      105,
      this.position.x,
      this.position.y,
      191.6,
      105
    )

    this.position.y += this.gravitySpeed + this.verticalSpeed
    this.gravitySpeed += this.gravity
    // this.velocity.y += this.gravity
    if (keyUp) {
      this.up()
    } else {
      if (this.verticalSpeed < 0) {
        this.verticalSpeed += this.verticalSpeedFactor
      }
    }
    this.position.x += this.horizontalSpeed * this.movementFactor

    if (keyRight) {
      this.right()
    }
    if(keyLeft){
      this.left()
    }

  }

  static() {
    this.sY = 0
  }
  //Up movement
  up() {
    this.verticalSpeed -= this.verticalSpeedFactor
    this.sY = 124
  }
  //right movement
  right() {
    this.horizontalSpeed += this.horizontalSpeedFactor
    this.sY = 253.4
  }
  //left movement
  left() {
    this.horizontalSpeed -= this.horizontalSpeedFactor
    this.sY = 389.8
  }
}
