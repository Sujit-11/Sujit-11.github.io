class ScoreEffect {
    constructor(x, y, score) {
      this.x = x;
      this.y = y;
      this.score = score;
      this.opacity = 1;
      this.size = 30;
    }
  
    update(ctx) {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.font = `${this.size}px Nunito-ExtraBold`;
      ctx.fillStyle = '#ff6600';
      ctx.strokeStyle = "#ffffff";
      ctx.fillText(`${this.score}`, this.x, this.y);
      this.opacity -= 0.02;
      this.size += 0.4;
      ctx.restore();
    }
  }