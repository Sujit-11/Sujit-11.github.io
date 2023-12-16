class LevelCompleted {
  constructor() {
    this.xUpperText = 120
    this.yUpperText = 230
    this.xLowerText = 170
    this.yLowerText = 290
    this.width = 120
    this.height = 50
  }
  update(ctx) {
    ctx.beginPath()
    ctx.fillStyle = '#ffffff'

    //Level * Completed
    ctx.font = '60px Nunito-ExtraBold'
    ctx.lineWidth = 10
    ctx.fillStyle = '#ff6600'
    ctx.strokeStyle = '#ffffff'
    ctx.strokeText(
      `LEVEL   ${levelValue + 1}   COMPLETED!`,
      this.xUpperText,
      this.yUpperText
    )
    ctx.fillText(
      `LEVEL   ${levelValue + 1}   COMPLETED!`,
      this.xUpperText,
      this.yUpperText
    )

    //Adding Coconut Fuel to Points
    ctx.lineWidth = 6
    ctx.font = '30px Nunito-ExtraBold'
    ctx.strokeText(
      `ADDING COCONUT FUEL TO POINTS`,
      this.xLowerText,
      this.yLowerText
    )
    ctx.fillText(
      `ADDING COCONUT FUEL TO POINTS`,
      this.xLowerText,
      this.yLowerText
    )

    //Default
    ctx.lineWidth = 1
  }
}
