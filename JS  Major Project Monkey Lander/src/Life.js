class Life {
  constructor() {
    this.monkeyRem = 3
    this.monkeyRemImg = new Image()
    this.monkeyRemImg.src = '../assets/images/character/life.png'
    this.x = 505
    this.y = 35
    this.height = 23.7
    this.width = 142
  }
  update(ctx) {
    ctx.font = "12px 'Nunito', sans-serif"
    ctx.fillStyle = '#ff6600'
    ctx.strokeStyle = '#ff6600'
    ctx.strokeText('MONKEY LEFT', 535, 18)
    ctx.fillText('MONKEY LEFT', 535, 18)

    if (this.monkeyRem === 3) {
      ctx.drawImage(
        this.monkeyRemImg,
        0,
        0,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height
      )
    }
    if (this.monkeyRem === 2) {
      ctx.drawImage(
        this.monkeyRemImg,
        0,
        48.1,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height
      )
    }
    if (this.monkeyRem === 1) {
      ctx.drawImage(
        this.monkeyRemImg,
        0,
        95.27,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height
      )
    }
    if (this.monkeyRem <= 0) {
      ctx.drawImage(
        this.monkeyRemImg,
        0,
        143.27,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height
      )
    }
  }
  dead() {
    sound.dead.play()
    if (this.monkeyRem > 0) {
      this.monkeyRem -= 1
      ufo.reset()
    }else{
      state = gameEnd
    }
  }
}
