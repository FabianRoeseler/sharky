class Boss extends MovableObject {
  IMAGES_SWIM = [
    "../img/2Enemy/FinalEnemy/2.floating/1.png",
    "../img/2Enemy/FinalEnemy/2.floating/2.png",
    "../img/2Enemy/FinalEnemy/2.floating/3.png",
    "../img/2Enemy/FinalEnemy/2.floating/4.png",
    "../img/2Enemy/FinalEnemy/2.floating/5.png",
    "../img/2Enemy/FinalEnemy/2.floating/6.png",
    "../img/2Enemy/FinalEnemy/2.floating/7.png",
    "../img/2Enemy/FinalEnemy/2.floating/8.png",
    "../img/2Enemy/FinalEnemy/2.floating/9.png",
    "../img/2Enemy/FinalEnemy/2.floating/10.png",
    "../img/2Enemy/FinalEnemy/2.floating/11.png",
    "../img/2Enemy/FinalEnemy/2.floating/12.png",
    "../img/2Enemy/FinalEnemy/2.floating/13.png",
  ];

  speed = 0.35;

  constructor() {
    super().loadImage("../img/2Enemy/FinalEnemy/2.floating/1.png");
    this.loadImages(this.IMAGES_SWIM);

    this.x = 3200;
    this.y = 0;
    this.height = 510;
    this.width = 375;
    this.animate();
    this.moving();
  }

  animate() {
    setInterval(() => {
      let i = this.currentImage % this.IMAGES_SWIM.length;
      let path = this.IMAGES_SWIM[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 300);
  }
}
