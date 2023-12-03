class Player {
  constructor(position) {
    this.position = position
    this.velocity = {
        x:0,
        y:0
    }
    this.img = new Image();
    this.img.src = "./doodler-right.png"
  }

  draw() {
    ctx.drawImage(this.img, this.position.x, this.position.y, PLAYERSIZE, PLAYERSIZE);
  }
  update(){
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    this.velocity.y += GRAVITY
    
    if(this.position.x > canvas.width) {
        this.position.x = 0
    }
    else if (this.position.x + PLAYERSIZE < 0){
        this.position.x = canvas.width 
    }
    
  }
}
