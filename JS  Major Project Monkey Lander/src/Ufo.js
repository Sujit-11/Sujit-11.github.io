class Ufo {
  constructor() {
    this.canPlay = true
    this.fuel = new Fuel()
    this.width = 191.6
    this.height = 105

    this.sX = 0
    this.sY = 0

    this.position = [
      { x: 90, y: -40 },
      { x: 90, y: -40 },
      { x: 90, y: -40 },
      { x: 190, y: -40 },
      { x: 150, y: -40 },
      {},
    ]
    this.checkpoint = [
      { x: 90, y: -40 },
      { x: 90, y: -40 },
      { x: 90, y: -40 },
      { x: 190, y: -40 },
      { x: 150, y: -40 },
      {},
    ]
    this.ellipse = []
    this.ufoImage = new Image()
    this.ufoImage.src = '../assets/images/character/ufo.png'

    this.movementFactor = 0.2
    this.horizontalSpeed = 0
    this.horizontalSpeedFactor = 0.2

    this.verticalSpeed = 0
    this.verticalSpeedFactor = 0.05

    this.gravitySpeed = 0
    this.gravity = 0.01
  }

  update(ctx, backgroundImg) {
    this.draw(ctx, backgroundImg)

    //Game Condition
    if (this.canPlay) {
      this.position[levelValue].y += this.gravitySpeed + this.verticalSpeed
      this.gravitySpeed += this.gravity
      this.position[levelValue].x += this.horizontalSpeed * this.movementFactor

      if (keyUp) {
        this.up()
      } else {
        if (this.verticalSpeed < 0) {
          this.verticalSpeed += this.verticalSpeedFactor
        }
      }

      if (keyRight) {
        this.right()
      }
      if (keyLeft) {
        this.left()
      }
      if (keyUp && keyRight) {
        this.upRight()
      }
      if (keyUp && keyLeft) {
        this.upLeft()
      }
    }
    this.checkCanvasCollision()
  }

  draw(ctx, backgroundImg) {
    this.boundEllipse()
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(
      this.ufoImage,
      this.sX,
      this.sY,
      191.6,
      105,
      this.position[levelValue].x,
      this.position[levelValue].y,
      191.6,
      105
    )
    const drawBoundingEllipse = (i) => {
      ctx.beginPath()
      ctx.ellipse(
        this.ellipse[i].x,
        this.ellipse[i].y,
        this.ellipse[i].radiusX,
        this.ellipse[i].radiusY,
        this.ellipse[i].rotn,
        this.ellipse[i].startAngle,
        this.ellipse[i].endAngle
      )
      ctx.strokeStyle = 'purple'
      ctx.stroke()
    }
    for (let i = 0; i <= this.ellipse.length - 1; i++) {
      drawBoundingEllipse(i)
    }
  }

  reset() {
    sound.spawn.play()
    this.position[levelValue].y = this.checkpoint[levelValue].y
    this.position[levelValue].x = this.checkpoint[levelValue].x
    fuel.fuelHealth = FUEL_HEALTH
    // this.canPlay = true
    this.gravitySpeed = 0
    this.verticalSpeedFactor = 0.05
    this.verticalSpeed = 0
    this.horizontalSpeedFactor = 0.2
    this.horizontalSpeed = 0
  }

  boundEllipse() {
    this.ellipse = [
      {
        x: this.position[levelValue].x + this.width / 2,
        y: this.position[levelValue].y + this.height / 2 + 7,
        radiusX: 78, // horizontal radius
        radiusY: 32, // vertical radius
        rotn: 0,
        startAngle: 0,
        endAngle: 2 * Math.PI,
      },
      {
        x: this.position[levelValue].x + this.width / 2,
        y: this.position[levelValue].y + 32,
        radiusX: 45, // horizontal radius
        radiusY: 32, // vertical radius
        rotn: 0,
        startAngle: 0,
        endAngle: 2 * Math.PI,
      },
      {
        x: this.position[levelValue].x + 42,
        y: this.position[levelValue].y + 100,
        radiusX: 12, // horizontal radius
        radiusY: 4, // vertical radius
        rotn: (Math.PI / 180) * 25,
        startAngle: 0,
        endAngle: 2 * Math.PI,
      },
      {
        x: this.position[levelValue].x + 145,
        y: this.position[levelValue].y + 100,
        radiusX: 12, // horizontal radius
        radiusY: 4, // vertical radius
        rotn: (Math.PI / 180) * 335,
        startAngle: 0,
        endAngle: 2 * Math.PI,
      },
    ]
  }

  checkCanvasCollision() {
    let borderCollision =
      this.position[levelValue].y < -80 ||
      this.position[levelValue].y > 520 ||
      this.position[levelValue].x < -130 ||
      this.position[levelValue].x > 935

    if (!borderCollision) {
      return
    }
    life.dead()
  }

  static() {
    this.sY = 0
  }

  //Up movement
  up() {
    this.verticalSpeed -= this.verticalSpeedFactor
    this.sY = 124
  }
  //landed
  landed() {
    this.sY = 523.5
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
  //upright sprite
  upRight() {
    this.sY = 662.25
  }
  //upLeft sprite
  upLeft() {
    this.sY = 798.55
  }
}
