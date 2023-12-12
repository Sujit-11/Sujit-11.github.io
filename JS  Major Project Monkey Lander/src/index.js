const ufo = new Ufo();
const landingSpace = new LandingSpace();
const life = new Life();
const remBanana = new BananaLeft();
const platform = new LandingSpace();


function animate(){
    ufo.update(ctx,backgroundImg)
    life.update(ctx)
    remBanana.update(ctx)
    platform.update(ctx)
    requestAnimationFrame(animate)
}
animate()