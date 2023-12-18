class Level {
  constructor() {
  }
  update(ctx) {
    canvas.style.display = 'block'
    ufo.update(ctx, backgroundImg)
    fruit.update(ctx)
    scoreEffects.forEach((effect, i) => {
      if (effect.opacity <= 0) {
        scoreEffects.splice(i, 1);
      } else {
        effect.update(ctx);
      }
    });
    if (levelValue === 1) {
      cliffright.update(ctx)
      cliffleft.update(ctx)
    }
    if (levelValue === 2) {
      ropeRight.update(ctx)
      skeletonLeft.update(ctx)
      tree.update(ctx)
    }
    if (levelValue === 3) {
      tree.update(ctx)
      ropeLeft.update(ctx)
      bigCliff.update(ctx)
    }
    if (levelValue === 4) {
      bigRock.update(ctx)
      tree.update(ctx)
      rock.update(ctx)
      skeletonRight.update(ctx)
    }
    if(levelValue === 5){
      gameOver.update(ctx)
      return
    }
    if (banana.bananaLeftToCollect === 0) {
      platform.update(ctx)
    }
    if(paused){
      pause.update(ctx)
    }
    life.update(ctx)

    if (life.monkeyRem === 0) {
      state = gameEnd
      // gameOver.update(ctx)
      // return
    }

    remBanana.update(ctx)
    fuel.update(ctx)
    scr.update(ctx) // score update
    banana.update(ctx)
  }
}
