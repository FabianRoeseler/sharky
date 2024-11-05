class MovableObject {
  x = 0;
  y = 0;
  img;
  height = 280;
  width = 270;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
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
