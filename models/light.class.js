class Light extends MovableObject {
  height = 600;
  width = 450;
  constructor() {
    super().loadImage("../img/3.Background/Layers/1.Light/1.png");

    this.x = Math.random() * 1200;

    this.animate();
  }

  animate() {
    setInterval(() => {
      this.x -= 0.15;
    }, 1000 / 60);
  }
}
