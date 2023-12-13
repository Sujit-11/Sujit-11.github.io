const ufo = new Ufo();
const life = new Life();
const remBanana = new BananaLeft();
const platform = new LandingSpace();
const fuel = new Fuel();
const fruit = new Fruit();
const banana = new Banana();


function animate(){
    ufo.update(ctx,backgroundImg)
    life.update(ctx)
    remBanana.update(ctx)
    platform.update(ctx)
    fuel.update(ctx)
    fruit.update(ctx)
    banana.update(ctx)
    requestAnimationFrame(animate)
}
animate()