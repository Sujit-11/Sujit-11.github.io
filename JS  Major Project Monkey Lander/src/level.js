class Level {
  constructor() {}
  update(ctx) {
    levelValue = 4
    // banana.bananaLeftToCollect = 0
    canvas.style.display = 'block'
    ufo.update(ctx, backgroundImg)
    fruit.update(ctx)
    if (levelValue === 1) {
      cliffright.update(ctx)
      cliffleft.update(ctx)
  
    }
    if (levelValue === 2) {
      ropeRight.update(ctx)
      skeletonLeft.update(ctx)
      tree.update(ctx)
    }
    if (levelValue === 3){
      tree.update(ctx)
      ropeLeft.update(ctx)
      bigCliff.update(ctx)
    }
    if (levelValue === 4){
      bigRock.update(ctx)
      tree.update(ctx)
      rock.update(ctx)
      skeletonRight.update(ctx)
    }
    if (banana.bananaLeftToCollect === 0) {
      platform.update(ctx)
    }
    life.update(ctx)

    if(life.monkeyRem <=0){
      gameOver.update(ctx)
      return
    }

    remBanana.update(ctx)
    fuel.update(ctx)
    scr.update(ctx) // score update
    banana.update(ctx)
  }
}
