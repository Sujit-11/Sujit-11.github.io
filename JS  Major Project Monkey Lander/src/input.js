let keyUp = false
let keyRight = false
let keyLeft = false
document.addEventListener('keydown', (e) => {
  if(state != inGame){
    return
  }
  switch (e.key) {
    case 'ArrowUp':
      if (!ufo.canPlay) {
        ufo.canPlay = true
        paused = false
      }
      keyUp = true
      sound.startUp.play()
      fuel.decreaseFuel()
      break
    case 'ArrowRight':
      if (!ufo.canPlay) {
        ufo.canPlay = true
        paused = false
      }
      keyRight = true
      sound.start.play()
      fuel.decreaseFuel()
      break
    case 'ArrowLeft':
      if (!ufo.canPlay) {
        ufo.canPlay = true
        paused = false
      }
      keyLeft = true
      sound.start.play()
      fuel.decreaseFuel()

      break
    case 'p':
    case 'P':
      if (ufo.canPlay) {
        ufo.canPlay = false
        paused = true
      } else {
        ufo.canPlay = true
        paused = false
      }
      break
  }
})

document.addEventListener('keyup', (e) => {
  ufo.static()

  switch (e.key) {
    case 'ArrowUp':
      keyUp = false
      sound.startUp.pause()
      break
    case 'ArrowRight':
      keyRight = false
      sound.start.pause()
      break
    case 'ArrowLeft':
      keyLeft = false
      sound.start.pause()
      break
  }
})

document.addEventListener('click',(event)=>{
  var rect = canvas.getBoundingClientRect();
  var xmouse = event.clientX - rect.left;
  var ymouse = event.clientY - rect.top;
  exit.quit(xmouse,ymouse)
})
