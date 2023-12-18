class Initialize {
    constructor() {}
    update() {
      levelValue = 0
      ufo.position = [
        { x: 90, y: -40 },
        { x: 90, y: -40 },
        { x: 90, y: -40 },
        { x: 190, y: -40 },
        { x: 150, y: -40 },
        {},
      ]
      banana.position = [
        [
          { x: 200, y: 200 },
          { x: 600, y: 300 },
        ],
        [
          { x: 100, y: 250 },
          { x: 800, y: 250 },
        ],
        [
          { x: 60, y: 295 },
          { x: 550, y: 150 },
        ],
        [
          { x: 200, y: 220 },
          { x: 600, y: 400 },
        ],
        [
          { x: 110, y: 450 },
          { x: 850, y: 250 },
        ],
      ]
      fruit.position = [
        [{ x: 430, y: 250 }],
        [
          { x: 550, y: 300 },
          { x: 350, y: 300 },
        ],
        [
          { x: 880, y: 150 },
          { x: 670, y: 350 },
          { x: 350, y: 350 },
        ],
        [
          { x: 500, y: 60 },
          { x: 850, y: 250 },
          { x: 900, y: 450 },
        ],
        [
          { x: 250, y: 390 },
          { x: 580, y: 360 },
          { x: 650, y: 220 },
        ],
      ]
  
      life.monkeyRem = 3
      fuel.fuelHealth = FUEL_HEALTH
      ufo.gravitySpeed = 0
      ufo.horizontalSpeed = 0
      ufo.verticalSpeed = 0
      ufo.verticalSpeedFactor = 0.05
      ufo.horizontalSpeedFactor = 0.2
      ufo.canPlay = true
      paused = false
      score = 0
      platform.snd = false
    }
  }
  