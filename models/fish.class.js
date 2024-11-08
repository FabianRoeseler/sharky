class Fish extends MovableObject {
  IMAGES_SWIM = [
    "../img/2Enemy/Pufferfish/1swim/1swim1.png",
    "../img/2Enemy/Pufferfish/1swim/1swim2.png",
    "../img/2Enemy/Pufferfish/1swim/1swim3.png",
    "../img/2Enemy/Pufferfish/1swim/1swim4.png",
    "../img/2Enemy/Pufferfish/1swim/1swim5.png",
  ];

  constructor() {
    super().loadImage("../img/2Enemy/Pufferfish/1swim/1swim1.png");
    this.loadImages(this.IMAGES_SWIM);

    this.x = 190 + Math.random() * 2000;
    this.y = Math.random() * 300;
    this.height = 110;
    this.width = 75;
    this.animate();
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
