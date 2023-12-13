let keyUp = false
let keyRight = false
let keyLeft = false
document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      keyUp = true
      fuel.decreaseFuel()
      break
    case 'ArrowRight':
      keyRight = true
      fuel.decreaseFuel()
      break
    case 'ArrowLeft':
      keyLeft = true
      fuel.decreaseFuel()
      break
  }
})

document.addEventListener('keyup', (e) => {
  ufo.static()
  switch (e.key) {
    case 'ArrowUp':
      keyUp = false
      break
    case 'ArrowRight':
      keyRight = false
      break
    case 'ArrowLeft':
      keyLeft = false
      break
  }
})
