class Ball{
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {number} radius 
     * @param {number} color
     */

    constructor(x,y,radius,moveX,moveY,color){
        this.x= x;
        this.y=y;
        this.radius=radius;
        this.color=color;
        this.element = document.createElement("div");
        this.element.className="ball";
        this.moveX=moveX;
        this.moveY=moveY;
    }

    getElement = () => {return this.element};
    
    draw() {
        this.element.style.width = `${this.radius * 2}px`;
        this.element.style.height = `${this.radius * 2}px`;
        this.element.style.backgroundColor = `${this.color}`;
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }

    move() {
        this.x += this.moveX * SPEED;
        this.y += this.moveY * SPEED;
    }
    checkWallCollision(){
        if (this.x + this.radius * 2 > VIEW_PORT_WIDTH || this.x < 0) {
            this.moveX = -this.moveX;
        }
        if (this.y  + this.radius * 2 > VIEW_PORT_HEIGHT || this.y < 0) {
            this.moveY = -this.moveY;
        }
    }

}