class World {
  character = new Character();
  enemies = [
    new Fish(),
    new Fish(),
    new Fish(),
    new Fish(),
    new Fish(),
    new Fish(),
    new Fish(),
    new Fish(),
    new Fish(),
    new Fish(),
    new Fish(),
  ];

  lights = [new Light(), new Light(), new Light()];

  backgroundObjects = [
    new BackgroundObject("img/3.Background/Layers/5.Water/D1.png", 0, 0),
    new BackgroundObject("img/3.Background/Layers/3.Fondo1/D1.png", 0, 0),
    new BackgroundObject("img/3.Background/Layers/2.Floor/L1.png", 0, 0),
    new BackgroundObject("img/3.Background/Layers/5.Water/D2.png", 718, 0),
    new BackgroundObject("img/3.Background/Layers/3.Fondo1/D2.png", 718, 0),
    new BackgroundObject("img/3.Background/Layers/2.Floor/L2.png", 718, 0),
  ];

  canvas;
  ctx;
  keyboard;
  camera_x = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
  }

  setWorld() {
    this.character.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.backgroundObjects);
    this.addObjectsToMap(this.lights);
    this.addObjectsToMap(this.enemies);
    this.addToMap(this.character);

    this.ctx.translate(-this.camera_x, 0);

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
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.height, mo.width);
    if (mo.otherDirection) {
      mo.x = mo.x * -1;
      this.ctx.restore();
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }
}
