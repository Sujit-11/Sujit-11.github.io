class Ufo {
  constructor() {
    this.canPlay=true
    this.width = 191.6
    this.height = 105

    this.sX = 0
    this.sY = 0

    this.position = { x: 90, y: -10 }

    this.ellipse = [
      {
        x: this.position.x + this.width / 2,
        y: this.position.y + this.height / 2 + 7,
        radiusX: 78, // horizontal radius
        radiusY: 32, // vertical radius
        rotn: 0,
        startAngle: 0,
        endAngle: 2 * Math.PI,
      },
      {
        x: this.position.x + this.width / 2,
        y: this.position.y + 32,
        radiusX: 45, // horizontal radius
        radiusY: 32, // vertical radius
        rotn: 0,
        startAngle: 0,
        endAngle: 2 * Math.PI,
      },
      {
        x: this.position.x + 42,
        y: this.position.y + 100,
        radiusX: 12, // horizontal radius
        radiusY: 4, // vertical radius
        rotn: (Math.PI / 180) * 25,
        startAngle: 0,
        endAngle: 2 * Math.PI,
      },
      {
        x: this.position.x + 145,
        y: this.position.y + 100,
        radiusX: 12, // horizontal radius
        radiusY: 4, // vertical radius
        rotn: (Math.PI / 180) * 335,
        startAngle: 0,
        endAngle: 2 * Math.PI,
      },
    ]

    this.ufoImage = new Image()
    this.ufoImage.src = '../assets/images/character/ufo.png'

    this.movementFactor = 0.2
    this.horizontalSpeed = 0
    this.horizontalSpeedFactor = 0.2

    this.verticalSpeed = 0
    this.verticalSpeedFactor = 0.05

    this.gravitySpeed = 0
    this.gravity = 0.01
    this.landingClock = 0
  }
  draw(ctx, backgroundImg) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(
      this.ufoImage,
      this.sX,
      this.sY,
      191.6,
      105,
      this.position.x,
      this.position.y,
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
  update(ctx, backgroundImg) {
    this.draw(ctx, backgroundImg)

    //Game Condition

    if (this.canPlay) {
      this.ellipse.forEach((element) => {
        element.y += this.gravitySpeed + this.verticalSpeed
        element.x += this.horizontalSpeed * this.movementFactor
      })
      this.position.y += this.gravitySpeed + this.verticalSpeed
      this.gravitySpeed += this.gravity

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
      if (keyLeft) {
        this.left()
      }
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
}
