class Sound {
    constructor() {
      this.start = new Audio("../assets/audio/glide.mp3");
      this.startUp = new Audio("../assets/audio/glide1.mp3");
      this.dead = new Audio("../assets/audio/dead.mp3");
      this.eat = new Audio("../assets/audio/eat.mp3");
      this.spawn = new Audio("../assets/audio/spawn.mp3");
      this.landPop = new Audio("../assets/audio/landpop.mp3");
      this.points = new Audio("../assets/audio/points.mp3");
      this.victory = new Audio("../assets/audio/victory.mp3");
      this.victory.loop = false;
      this.landPop.loop = false;
    }
  }
  