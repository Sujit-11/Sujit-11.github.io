const ufo = new Ufo();
const life = new Life();
const remBanana = new BananaLeft();
const platform = new LandingSpace();
const fuel = new Fuel();


function animate(){
    ufo.update(ctx,backgroundImg)
    life.update(ctx)
    remBanana.update(ctx)
    platform.update(ctx)
    fuel.update(ctx)
    requestAnimationFrame(animate)
}
animate()