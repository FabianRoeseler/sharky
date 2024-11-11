class Fish extends MovableObject {
  IMAGES_SWIM = [
    "../img/2Enemy/Pufferfish/1swim/1swim1.png",
    "../img/2Enemy/Pufferfish/1swim/1swim2.png",
    "../img/2Enemy/Pufferfish/1swim/1swim3.png",
    "../img/2Enemy/Pufferfish/1swim/1swim4.png",
    "../img/2Enemy/Pufferfish/1swim/1swim5.png",
  ];

  speed = Math.random() * 0.65;

  constructor() {
    super().loadImage("../img/2Enemy/Pufferfish/1swim/1swim1.png");
    this.loadImages(this.IMAGES_SWIM);

    this.x = 300 + Math.random() * 2600;
    this.y = Math.random() * 300;
    this.height = 110;
    this.width = 75;
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
