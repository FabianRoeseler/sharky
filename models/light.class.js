class Light extends MovableObject {
  height = 600;
  width = 450;
  speed = Math.random() * 0.65;
  constructor() {
    super().loadImage("../img/3.Background/Layers/1.Light/1.png");

    this.x = Math.random() * 3000;

    this.moving();
  }
}
