class BackgroundObject extends MovableObject {
  height = 720;
  width = 480;
  constructor(imagePath) {
    super().loadImage(imagePath);
  }
}
