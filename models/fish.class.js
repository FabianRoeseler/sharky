class Fish extends MovableObject {
  constructor() {
    super().loadImage("../img/2.Enemy/Pufferfish/1.Swim/1.swim1.png");
    this.x = 190 + Math.random() * 2000;
    this.y = Math.random() * 300;
    this.height = 110;
    this.width = 75;
  }
}
