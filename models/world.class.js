class World {
  character = new Character();
  enemies = [new Fish(), new Fish(), new Fish(), new Fish()];
  lights = [new Light(), new Light(), new Light(), new Light()];
  backgroundObjects = [
    new BackgroundObject("img/3.Background/Layers/5.Water/D.png"),
  ];
  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.addObjectsToMap(this.backgroundObjects);
    this.addObjectsToMap(this.lights);
    this.addObjectsToMap(this.enemies);
    this.addToMap(this.character);

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    for (let index = 0; index < objects.length; index++) {
      const object = objects[index];
      this.addToMap(object);
    }
  }

  addToMap(mo) {
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.height, mo.width);
  }
}
