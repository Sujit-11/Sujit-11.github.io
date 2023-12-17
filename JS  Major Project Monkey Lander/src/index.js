const sound = new Sound()
const ufo = new Ufo()
const pause = new Pause()
const life = new Life()
// const collision = new Collision()
const remBanana = new BananaLeft()
const platform = new LandingSpace()
const cliffright = new CliffRight()
const cliffleft = new CliffLeft()
const ropeLeft = new RopeLeft()
const ropeRight = new RopeRight()
const skeletonLeft = new SkeletonLeft()
const skeletonRight = new SkeletonRight()
const tree = new Tree()
const bigCliff = new BigCliff()
const rock = new Rock()
const bigRock = new BigRock()
const level = new Level()
const levelCompleted = new LevelCompleted()
const fuel = new Fuel()
const fruit = new Fruit()
const banana = new Banana()
const scr = new Score()
const highScore = new Highscore()
const gameOver = new GameOver()

let levelValue = 0
let score = 0
let highscore = localStorage.getItem("highscore") 
let paused = false
function animate() {
  level.update(ctx)

  requestAnimationFrame(animate)
}
animate()
