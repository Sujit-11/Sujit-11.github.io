const menuDiv = document.getElementById('menu')
const playBtn = document.getElementById('play')
const levelDiv = document.getElementById('level-area')
function play() {
  state = inGame
  sound.spawn.play()
}

function levelButton() {
  levelDiv.style.display = 'block'
  menuDiv.style.display = 'none'
}

function levelBackButton() {
  levelDiv.style.display = 'none'
  menuDiv.style.display = 'block'
}

function levelOne() {
  levelValue = 0
  state = inGame
  levelDiv.style.display = 'none'
  menuDiv.style.display = 'block'
  sound.spawn.play()
}

function levelTwo() {
  levelValue = 1
  state = inGame
  levelDiv.style.display = 'none'
  menuDiv.style.display = 'block'
  sound.spawn.play()
}
function levelThree() {
  levelValue = 2
  state = inGame
  levelDiv.style.display = 'none'
  menuDiv.style.display = 'block'
  sound.spawn.play()
}
function levelFour() {
  levelValue = 3
  state = inGame
  levelDiv.style.display = 'none'
  menuDiv.style.display = 'block'
  sound.spawn.play()
}

function levelFive() {
  levelValue = 4
  state = inGame
  levelDiv.style.display = 'none'
  menuDiv.style.display = 'block'
  sound.spawn.play()
}
