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
    const {leftFootCollisionPoints,rightFootCollisionPoints} = checkCollision()
    this.landingCollision(leftFootCollisionPoints,rightFootCollisionPoints)
  }
  landingCollision(leftFootCollisionPoints, rightFootCollisionPoints) {
    for (const { boundPointX: leftX, boundPointY: leftY } of leftFootCollisionPoints) {
        for (const { boundPointX: rightX, boundPointY: rightY } of rightFootCollisionPoints) {
            if (
                leftX > this.position.x &&
                leftX < this.position.x + this.width &&
                leftY > this.position.y &&
                leftY < this.position.y + this.height  &&
                rightX > this.position.x &&
                rightX < this.position.x + this.width &&
                rightY > this.position.y &&
                rightY < this.position.y + this.height 
                ) { 
                  if(ufo.gravitySpeed + ufo.verticalSpeed < 2){
                    ufo.canPlay = false;
                    ufo.landed();
                  }
            }
        }
    }
}
}
