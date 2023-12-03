const keys = {
    A: false,
    Space: false,
    D: false,
}

let doodlerRightImg;
let doodlerLeftImg;

doodlerRightImg = new Image();
doodlerRightImg.src = "./doodler-right.png";

doodlerLeftImg = new Image();
doodlerLeftImg.src = "./doodler-left.png";

window.onkeydown = e =>{
    switch(e.code){
        case 'KeyA':
            keys.A = true
            p1.img = doodlerLeftImg
            p1.velocity.x = - SPEED

            break;
            case 'KeyD':
                keys.D = true
                p1.img = doodlerRightImg
                p1.velocity.x = SPEED
                break;
            case 'Space' :
                if(gameOver){
                    keys.Space = true
                    p1.position.x = canvas.width / 2 - PLAYERSIZE / 2;
                    p1.position.y = canvas.height * 7 / 8 - PLAYERSIZE;
                    p1.velocity.y = 0;
                    score=0
                    maxScore=0
                    platformArray=[]
                    placePlatform()
                    gameOver=false
                }
                break;
            }  
}
window.onkeyup = e =>{
    switch(e.code){
        case 'KeyA':
            keys.A = false
            p1.velocity.x = 0
            break;
        
        case 'KeyD':
            p1.velocity.x = 0
            keys.D = false
            break;

        case 'Space':
            keys.Space = false
            break;
    }  
}
