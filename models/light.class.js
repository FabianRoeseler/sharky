class Light extends MovableObject {
  height = 600;
  width = 450;
  constructor() {
    super().loadImage("../img/3.Background/Layers/1.Light/1.png");

    this.x = Math.random() * 700 + 300;
  }
}
