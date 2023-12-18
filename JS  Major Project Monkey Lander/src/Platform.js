class LandingSpace {
  constructor() {
    this.timer = 0
    this.landingSpaceImg = new Image()
    this.landingSpaceImg.src = 'assets/images/platform.png'
    this.timer = 0

    this.position = [
      { x: 760, y: 450 },
      { x: 400, y: 490 },
      { x: 200, y: 490 },
      { x: 280, y: 500 },
      { x: 780, y: 430 },
    ]
    this.height = 25
    this.width = 202
    this.nextLevelTimer = 0
    this.snd = false
    this.victorySound = false
  }

  update(ctx) {
    if (!this.snd) {
      sound.landPop.play()
      this.snd = true
    }
    ctx.drawImage(
      this.landingSpaceImg,
      1,
      1,
      this.width,
      this.height,
      this.position[levelValue].x,
      this.position[levelValue].y,
      this.width,
      this.height
    )

    const {
      leftFootCollisionPoints,
      rightFootCollisionPoints,
      headCollisionPoints,
      midCollisionPoints,
    } = ellipseCollisionPoints()
    this.landingCollision(
      leftFootCollisionPoints,
      rightFootCollisionPoints,
      headCollisionPoints,
      midCollisionPoints
    )
  }

  landingCollision(
    leftFootCollisionPoints,
    rightFootCollisionPoints,
    headCollisionPoints,
    midCollisionPoints
  ) {
    const otherPartsCollisionPoints = [
      ...headCollisionPoints,
      ...midCollisionPoints,
    ]

    for (const { boundPointX, boundPointY } of otherPartsCollisionPoints) {
      if (
        boundPointX > this.position[levelValue].x &&
        boundPointX < this.position[levelValue].x + this.width &&
        boundPointY > this.position[levelValue].y &&
        boundPointY < this.position[levelValue].y + this.height
      ) {
        life.dead()
        return // Exit the function early since the UFO is dead
      }
    }

    for (const {
      boundPointX: leftX,
      boundPointY: leftY,
    } of leftFootCollisionPoints) {
      for (const {
        boundPointX: rightX,
        boundPointY: rightY,
      } of rightFootCollisionPoints) {
        if (
          leftX > this.position[levelValue].x &&
          leftX < this.position[levelValue].x + this.width &&
          leftY > this.position[levelValue].y &&
          leftY < this.position[levelValue].y + this.height &&
          rightX > this.position[levelValue].x &&
          rightX < this.position[levelValue].x + this.width &&
          rightY > this.position[levelValue].y &&
          rightY < this.position[levelValue].y + this.height
        ) {
          if (ufo.gravitySpeed + ufo.verticalSpeed < 2) {
            if (!this.victorySound) {
              sound.victory.play()
              this.victorySound = true
            }
            this.timer += 1
            ufo.canPlay = false
            ufo.landed()
            if (this.timer > 80) {
              levelCompleted.update(ctx)
              if (fuel.fuelHealth > 0) {
                score += 1
                fuel.decreaseFuel()
                sound.points.play()
              } else {
                sound.points.pause()
                this.nextLevelTimer += 1
                if (this.nextLevelTimer > 160) {
                  if(levelValue === 5){
                    state = gameEnd
                  }
                  levelValue += 1
                  fuel.fuelHealth = FUEL_HEALTH
                  ufo.verticalSpeedFactor = 0.05
                  ufo.horizontalSpeedFactor = 0.2
                  ufo.horizontalSpeed = 0
                  ufo.verticalSpeed = 0
                  ufo.gravitySpeed = 0
                  ufo.canPlay = true
                  ufo.static()
                  this.nextLevelTimer = 0
                  this.timer = 0
                  this.snd = false
                  this.victorySound = false
                }
              }
            }
            return
          } else {
            life.dead()
            return
          }
        }
      }
    }
  }
}
