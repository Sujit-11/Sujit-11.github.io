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
    //   if (!this.sound) {
    //     gameufolandPop.play();
    //     this.sound = true;
    //   }
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

  landingCollision(rect1, rect2) {
    if (
      rect1.position.x <
        rect2.position.x + rect2.width &&
      rect1.position.x + rect1.width >
        rect2.position.x &&
      rect1.position.y <
        rect2.position.y + rect2.height &&
      rect1.position.y + rect1.height > rect2.position.y
    ) {
      if (
        ufo.gravitySpeed + ufo.verticalSpeed < 2 &&
        rect2.position.x + rect1.width - 28.9 <
          rect1.position.x + rect1.width &&
        rect2.position.x + rect2.width >
          rect1.position.x + rect1.width - 30.24
      ) {
        // if (!this.victorySound) {
        //   gameufovictory.play();
        //   this.victorySound = true;
        // }
        // gameufostartUp.pause();
        // gameufostart.pause();
        //timer ON
        this.timer += 1;
        //Stopping the monkey movement
        // ufo.canPlay = false;
        //changing the Sprite
        // ufo.landed();
    //     if (this.timer > 53) {
    //       ufonP.update(ufot);
    //       if (game.ufouelHealth > 0) {
    //         score += 1;
    //         game.ufoecreaseFuel();
    //         gameufopoints.play();
    //       } else {
    //         gameufopoints.pause();
    //         this.nextLevelTimer += 1;
    //         if (this.nextLevelTimer > 150) {
    //         += 1;
    //           game.ufouelHealth = fuelHealth;
    //           ufo.verticalSpeedFactor = 0.05;
    //           ufo.horizontalSpeedFactor = 0.2;
    //           ufo.horizontalSpeed = 0;
    //           ufo.verticalSpeed = 0;
    //           ufo.gravitySpeed = 0;
    //           ufo.canPlay = true;
    //           ufo.static();
    //           this.nextLevelTimer = 0;
    //           this.timer = 0;
    //           this.sound = false;
    //           this.victorySound = false;
    //           gameufospawn.play();
    //         }
    //         if === 5) {
    //           ufo= gameEnd;
    //         }
    //       }
    //     }
    //   } else {
    //     gameufo;
      }
    }
  }
}
