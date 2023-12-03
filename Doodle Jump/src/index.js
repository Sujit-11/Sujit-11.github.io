const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');


const p1 = new Player({
    x:canvas.width/2 - PLAYERSIZE/2,
    y:canvas.height *7/8 - PLAYERSIZE
})


function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    p1.update(ctx); 
    generatePlatform(ctx,p1);
    requestAnimationFrame(animate);
}
animate(); 



