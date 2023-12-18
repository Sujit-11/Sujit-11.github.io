class Fuel {
  constructor() {
    this.fuelHealth = FUEL_HEALTH
  }
  update(ctx) {
    ctx.beginPath()
    ctx.lineWidth = 2.5
    ctx.fillStyle = '#ffffff'
    ctx.strokeStyle = '#000000'
    ctx.moveTo(680, 70)
    ctx.arcTo(980, 70, 980, 100, 15)
    ctx.arcTo(980, 100, 666, 100, 15)
    ctx.arcTo(666, 100, 666, 70, 15)
    ctx.arcTo(666, 70, 980, 70, 15)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()

    ctx.lineWidth = 1

    ctx.clearRect(672, 74, 300, 22)
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(672, 74, 300, 22)
    ctx.beginPath()
    const fuelPercentage = this.fuelHealth / FUEL_HEALTH
    const redComponent = Math.floor(200 * (1 - fuelPercentage))
    const greenComponent = Math.floor(230 * fuelPercentage)
    ctx.fillStyle = `rgb(${redComponent}, ${greenComponent}, 0)`
    ctx.rect(672, 74, this.fuelHealth, 22)
    ctx.fill()
    ctx.closePath()

    ctx.font = '14px Nunito-Bold'
    ctx.fillStyle = '#ff6600'
    ctx.strokeStyle = '#ffffff'
    ctx.strokeText('COCONUT FUEL', 770, 90)
    ctx.fillText('COCONUT FUEL', 770, 90)

    if (this.fuelHealth < 1) {
      ufo.verticalSpeedFactor = 0
      ufo.horizontalSpeedFactor = 0
    }
  }

  decreaseFuel() {
    if (this.fuelHealth > 0) {
      this.fuelHealth -= 1
    }
  }
}
