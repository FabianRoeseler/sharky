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

  world;

  constructor() {
    super().loadImage("../img/1.Sharkie/1.IDLE/1.png");
    this.loadImages(this.IMAGES_IDLE);

    this.animate();
  }

  animate() {
    this.Idle();
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
  moveRight() {}
  moveUp() {}
  moveDown() {}

  shoot() {}
}
