class Character extends MovableObject {
  IMAGES_IDLE = [
    "../img/1.Sharkie/1.IDLE/1.png",
    "../img/1.Sharkie/1.IDLE/2.png",
    "../img/1.Sharkie/1.IDLE/3.png",
    "../img/1.Sharkie/1.IDLE/4.png",
    "../img/1.Sharkie/1.IDLE/5.png",
    "../img/1.Sharkie/1.IDLE/6.png",
    "../img/1.Sharkie/1.IDLE/7.png",
    "../img/1.Sharkie/1.IDLE/8.png",
    "../img/1.Sharkie/1.IDLE/9.png",
    "../img/1.Sharkie/1.IDLE/8.png",
    "../img/1.Sharkie/1.IDLE/7.png",
    "../img/1.Sharkie/1.IDLE/6.png",
    "../img/1.Sharkie/1.IDLE/5.png",
    "../img/1.Sharkie/1.IDLE/4.png",
    "../img/1.Sharkie/1.IDLE/3.png",
    "../img/1.Sharkie/1.IDLE/2.png",
  ];

  IMAGES_SWIM = [
    "../img/1.Sharkie/3.Swim/1.png",
    "../img/1.Sharkie/3.Swim/2.png",
    "../img/1.Sharkie/3.Swim/3.png",
    "../img/1.Sharkie/3.Swim/4.png",
    "../img/1.Sharkie/3.Swim/5.png",
    "../img/1.Sharkie/3.Swim/6.png",
  ];

  world;
  x = 50;
  speed = 6.5;
  swimming_sound = new Audio("audio/swimming.wav");

  constructor() {
    super().loadImage("../img/1.Sharkie/3.Swim/1.png");
    this.loadImages(this.IMAGES_SWIM);

    this.animate();
  }

  animate() {
    setInterval(() => {
      this.swimming_sound.pause();
      if (this.world.keyboard.RIGHT && this.x < 2200) {
        this.x += this.speed;
        this.swimming_sound.play();
        this.otherDirection = false;
        this.world.camera_x -= this.speed;
      }

      if (this.world.keyboard.LEFT && this.x > 50) {
        this.x -= this.speed;
        this.swimming_sound.play();
        this.otherDirection = true;
        this.world.camera_x += this.speed;
      }

      if (this.world.keyboard.UP) {
        this.y -= this.speed;
      }

      if (this.world.keyboard.DOWN) {
        this.y += this.speed;
      }
    }, 1000 / 60);

    setInterval(() => {
      if (
        this.world.keyboard.RIGHT ||
        this.world.keyboard.LEFT ||
        this.world.keyboard.UP ||
        this.world.keyboard.DOWN
      ) {
        let i = this.currentImage % this.IMAGES_SWIM.length;
        let path = this.IMAGES_SWIM[i];
        this.img = this.imageCache[path];
        this.currentImage++;
      }
    }, 150);
  }

  Idle() {
    setInterval(() => {
      let i = this.currentImage % this.IMAGES_IDLE.length;
      let path = this.IMAGES_IDLE[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 450);
  }

  moveLeft() {}
  moveUp() {}
  moveDown() {}

  shoot() {}
}
