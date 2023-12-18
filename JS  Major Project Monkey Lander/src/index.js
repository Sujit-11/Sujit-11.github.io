const sound = new Sound()
const ufo = new Ufo()
const pause = new Pause()
const life = new Life()
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
const init = new Initialize()
const gameOver = new GameOver()
const exit = new Exit()

let state = 0

let levelValue = 0
let score = 0
let scoreEffects = []
let highscore = localStorage.getItem("highscore") || 0
let paused = false

let strk = false

function update(){
  if(state != inGame){
    return
  }
  menuDiv.style.display = "none"
  canvas.style.display = "block"
  level.update(ctx)
}

function menu(){
  if (state != mainMenu) {
    return;
  }
  menuDiv.style.display = "block"
  canvas.style.display = "none"
  levelValue = 0
}

function gameOvr(){
  console.log(state)
  if(state != gameEnd){
    return;
  }
  gameOver.update(ctx)
}
function animate() {
  console.log(state)
  update()
  menu()
  gameOvr()
  requestAnimationFrame(animate)
}

animate()
