class MovableObject {
  x = 0;
  y = 0;
  img;
  height = 280;
  width = 270;
  imageCache = {};

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  moveRight() {
    console.log("moving right");
  }
  moveLeft() {
    console.log("moving left");
  }

  moveUp() {
    console.log("moving up");
  }

  moveDown() {
    console.log("moving down");
  }
}
